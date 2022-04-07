import { MediaLimits } from "@/common/enums/media.enum";
import MediaHelper from "@/common/helpers/media.helper";
import PaginationHelper from "@/common/helpers/pagination.helper";
import { IGetVideoThumbnail } from "@/common/interfaces/media.interface";
import {
  optimizeVideoExtensions,
  validAudioExtensions,
  validImageExtensions,
  validVideoExtensions,
} from "@/common/lists/media.list";
import MediaService from "@/common/services/media.service";
import StorageService from "@/common/services/storage.service";
import { Bookmark, Post, PostType } from "@/prisma/generated/type-graphql";
import { AzureContainersEnum, SubFoldersEnum } from "@/user/enums/file.enum";
import { logger } from "@azure/storage-blob";
import { UserInputError } from "apollo-server-errors";
import { FfprobeData } from "fluent-ffmpeg";
import { FileUpload } from "graphql-upload";
import { Service } from "typedi";
import { AddPollPostInput, AddTextualPostInput } from "./inputs/add-post.input";
import {
  IAddClipPostServiceParams,
  IAddMediaPostServiceParams,
  IAddPollPostParams,
  IAddTextualPostParams,
  IValidateAddMediaPostInputParams,
} from "./interfaces/add-post.interface";
import { IBookmarkPostParams } from "./interfaces/bookmark.interface";
import { IGetPostParams } from "./interfaces/get-post.interface";
import { IAddPostReactionParams } from "./interfaces/reaction.interface";
import BookmarksOutput from "./outputs/bookmark.output";
import GetPostsOutput from "./outputs/get-posts.output";
import ReactionOutput from "./outputs/reaction.output";
import PostRepository from "./repositories/post.repository";

@Service()
class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly storageService: StorageService,
    private readonly mediaService: MediaService,
    private readonly mediaHelper: MediaHelper,
    private readonly paginationHelper: PaginationHelper,
  ) {}

  public async getUserPosts({
    userId,
    paginationInput,
  }: IGetPostParams): Promise<GetPostsOutput> {
    const posts = await this.postRepository.getUserPosts({
      userId,
      paginationInput,
    });
    return {
      posts,
      pagination: {
        cursor: this.paginationHelper.getCursor<Post>({
          results: posts,
          key: "id",
        }),
      },
    };
  }

  public async getBookmarkedPosts({
    userId,
    paginationInput,
  }: IGetPostParams): Promise<BookmarksOutput> {
    const bookmarks = await this.postRepository.getBookmarkedPosts({
      paginationInput,
      userId,
    });
    return {
      bookmarks,
      pagination: {
        cursor: this.paginationHelper.getCursor<Bookmark>({
          results: bookmarks,
          key: "id",
        }),
      },
    };
  }

  public async getExplorePosts({
    userId,
    paginationInput,
  }: IGetPostParams): Promise<GetPostsOutput> {
    const posts = await this.postRepository.getExplorePosts({
      paginationInput,
      userId,
    });
    return {
      posts,
      pagination: {
        cursor: this.paginationHelper.getCursor<Post>({
          results: posts,
          key: "id",
        }),
      },
    };
  }

  public async bookmarPost({
    postId,
    userId,
  }: IBookmarkPostParams): Promise<boolean> {
    await this.postRepository.bookmarkPost({ postId, userId });
    return true;
  }

  public async postReaction({
    postId,
    userId,
    reactionType,
  }: IAddPostReactionParams): Promise<ReactionOutput> {
    const reaction = await this.postRepository.getPostReaction({
      postId,
      userId,
    });

    if (reaction && reaction?.reaction === reactionType) {
      const deletedReaction = await this.postRepository.deletePostReaction({
        userId,
        postId,
      });
      return {
        ...deletedReaction,
        deleted: true,
      };
    }
    const createdOrUpdatedReaction = await this.postRepository.addPostReaction({
      postId,
      userId,
      reactionType,
    });
    return {
      ...createdOrUpdatedReaction,
      deleted: false,
    };
  }

  public async addTextualPost({
    userId,
    addTextualPostInput,
  }: IAddTextualPostParams): Promise<Post> {
    this.validateAddTextualPostInput(addTextualPostInput);

    return this.postRepository.addTextualPost({ userId, addTextualPostInput });
  }

  public async addPollPost({
    userId,
    addPollPostInput,
  }: IAddPollPostParams): Promise<Post> {
    this.validateAddPollPostInput(addPollPostInput);

    return this.postRepository.addPollPost({ userId, addPollPostInput });
  }

  public async addClipPost({
    userId,
    addClipPostInput,
    clipMedia,
  }: IAddClipPostServiceParams): Promise<Post> {
    let audioFileUrl = "";
    let audioName = "";
    let thumbnailFileUrl = "";

    const mediaFiles = await Promise.all([clipMedia]);

    const {
      audioReadStream,
      audioFilename,
      thumbnailReadStream,
      thumbnailFilename,
      metadata,
    } = await this.mediaService.extractAudio(mediaFiles[0], {
      metadata: true,
    });

    this.validateAddMediaPostInput({
      addPostInput: addClipPostInput,
      media: [clipMedia],
      metadata,
    });

    audioName = audioFilename;

    audioFileUrl = await new Promise<string>(async resolve => {
      await this.storageService.uploadFile(
        { filename: audioFilename, createReadStream: audioReadStream },
        {
          containerName: AzureContainersEnum.audio,
          onSuccess: async (_uploadResponse, fileUrl) => {
            resolve(fileUrl);
          },
          onError: async error => {
            logger.error(error);
            throw new Error("Something went wrong");
          },
        },
      );
    });
    thumbnailFileUrl = await this.uploadThumbnail({
      thumbnailReadStream,
      thumbnailFilename,
      metadata,
      containerName: AzureContainersEnum.CLIP,
    });

    return new Promise<Post>(async resolve => {
      await this.storageService.uploadFiles(
        this.compressVideoMedia([clipMedia], mediaFiles),
        {
          containerName: AzureContainersEnum[addClipPostInput.type],
          onCompletion: async (_uploadResponse, fileUrls) => {
            const post = await this.postRepository.addClipPost({
              userId,
              addPostInput: addClipPostInput,
              urls: fileUrls,
              extraOptions: {
                audioUrl: audioFileUrl,
                thumbnailUrl: thumbnailFileUrl,
                audioName,
              },
            });
            resolve(post);
          },
          onError: async error => {
            logger.error(error);
            throw new Error("Something went wrong");
          },
        },
      );
    });
  }

  public async addMediaPost({
    userId,
    addMediaPostInput,
    media,
    mediaThumbnail,
  }: IAddMediaPostServiceParams): Promise<Post> {
    let thumbnailFileUrl: string;
    let metaData: FfprobeData;

    const mediaFiles = await Promise.all(media);

    this.validateMediaType(mediaFiles, addMediaPostInput.type);

    switch (addMediaPostInput.type) {
      case PostType.VIDEO:
        const videoThumbnailInput = await this.mediaService.getVideoThumbnail(
          mediaFiles[0],
        );

        metaData = videoThumbnailInput.metadata;

        thumbnailFileUrl = await this.uploadThumbnail({
          ...videoThumbnailInput,
          containerName: AzureContainersEnum.VIDEO,
        });
        break;

      case PostType.AUDIO:
        const thumbnail = await mediaThumbnail;
        const audioThumbnailInput: IGetVideoThumbnail = {
          thumbnailFilename: thumbnail.filename,
          thumbnailReadStream: thumbnail.createReadStream,
        };

        thumbnailFileUrl = await this.uploadThumbnail({
          ...audioThumbnailInput,
          containerName: AzureContainersEnum.AUDIO,
        });
        break;
    }

    this.validateAddMediaPostInput({
      addPostInput: addMediaPostInput,
      media,
      metadata: metaData,
    });

    return new Promise<Post>(async resolve => {
      await this.storageService.uploadFiles(
        this.compressVideoMedia(media, mediaFiles),
        {
          containerName: AzureContainersEnum[addMediaPostInput.type],
          onCompletion: async (_uploadResponse, fileUrls) => {
            const post = await this.postRepository.addMediaPost({
              userId,
              addPostInput: addMediaPostInput,
              urls: fileUrls,
              extraOptions: {
                thumbnailUrl: thumbnailFileUrl,
              },
            });
            resolve(post);
          },
          onError: async error => {
            logger.error(error);
            throw new Error("Something went wrong");
          },
        },
      );
    });
  }

  private compressVideoMedia(
    originalMediaFiles: Promise<FileUpload>[],
    mediaFiles: FileUpload[],
  ): Promise<Partial<FileUpload>>[] {
    const extension = this.mediaHelper.getFileExtension(
      mediaFiles[0]?.filename,
    );
    return optimizeVideoExtensions.includes(extension)
      ? [this.mediaService.compressVideo(mediaFiles[0])]
      : originalMediaFiles;
  }

  private async uploadThumbnail(
    thumbnailInput: IGetVideoThumbnail,
  ): Promise<string> {
    const { thumbnailReadStream, thumbnailFilename, containerName } =
      thumbnailInput;

    return new Promise<string>(async resolve => {
      await this.storageService.uploadFile(
        {
          filename: thumbnailFilename,
          createReadStream: thumbnailReadStream,
        },
        {
          containerName,
          folder: SubFoldersEnum.thumbnail,
          onSuccess: async (_uploadResponse, fileUrl) => {
            resolve(fileUrl);
          },
          onError: async error => {
            logger.error(error);
            throw new Error("Something went wrong");
          },
        },
      );
    });
  }

  private validateAddMediaPostInput({
    addPostInput,
    media,
    metadata,
  }: IValidateAddMediaPostInputParams): void {
    const { type } = addPostInput;

    if (!media) throw new UserInputError("Media is required");

    this.validateMedia(type, metadata);
  }

  private validateAddPollPostInput(addPollPostInput: AddPollPostInput): void {
    const { pollOptions, pollQuestion } = addPollPostInput;

    if (!pollQuestion) throw new UserInputError("Poll question is required");
    if (!pollOptions || pollOptions.length === 0)
      throw new UserInputError("Poll options is required");
  }

  private validateAddTextualPostInput(
    addTextualPostInput: AddTextualPostInput,
  ): void {
    const { text } = addTextualPostInput;

    if (!text) throw new UserInputError("Text is required");
  }

  private validateMedia(type: PostType, metadata: FfprobeData): void {
    const duration = metadata?.format?.duration;
    const size = metadata?.format?.size;

    const durationLimit =
      type === PostType.CLIP
        ? MediaLimits.clipDurationLimit
        : MediaLimits.durationLimit;
    const sizeLimit = MediaLimits.sizeLimit;

    if (duration > durationLimit) throw new Error("Too long video");
    if (size > sizeLimit) throw new Error("Too big size");
  }

  private validateMediaType(
    mediaFiles: FileUpload[],
    postType: PostType,
  ): void {
    const extension = this.mediaHelper
      .getFileExtension(mediaFiles[0]?.filename)
      .toLowerCase();

    if (postType !== PostType.PHOTO && mediaFiles.length > 1)
      throw new UserInputError("Multiple media not allowed");

    switch (postType) {
      case PostType.VIDEO:
      case PostType.CLIP:
        if (!validVideoExtensions.includes(extension))
          throw new UserInputError("Invalid video type");
        break;

      case PostType.PHOTO:
        if (!validImageExtensions.includes(extension))
          throw new UserInputError("Invalid image type");
        break;

      case PostType.AUDIO:
        if (!validAudioExtensions.includes(extension))
          throw new UserInputError("Invalid image type");
        break;

      default:
        break;
    }
  }
}

export default PostService;
