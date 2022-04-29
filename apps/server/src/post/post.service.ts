import { MediaLimits } from "@/common/enums/media.enum";
import MediaHelper from "@/common/helpers/media.helper";
import PaginationHelper from "@/common/helpers/pagination.helper";
import { IGetVideoThumbnail } from "@/common/interfaces/media.interface";
import {
  IMetaData,
  IMetaTag,
  IUploadApiResponse,
} from "@/common/interfaces/storage.interface";
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
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
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
  IUploadThumbnailResponse,
  IValidateAddMediaPostInputParams,
} from "./interfaces/add-post.interface";
import { IBookmarkPostParams } from "./interfaces/bookmark.interface";
import {
  IGetPostParams,
  IGetPostsParams,
  IGetRelatedPostsParams,
} from "./interfaces/get-post.interface";
import { IAddPostReactionParams } from "./interfaces/reaction.interface";
import BookmarksOutput from "./outputs/bookmark.output";
import GetPostsOutput, { PostOutput } from "./outputs/get-posts.output";
import ReactionOutput from "./outputs/reaction.output";
import PostRepository from "./repositories/post.repository";
import { SimilarPostsRecommenderService } from "./services/similar-post-recommender.service";
import { Prisma } from "@prisma/client";
import { nanoid } from "nanoid";
import { JsonHelper } from "@/common/helpers/json.helper";
import { SimilarPostRepository } from "./repositories/similarPost.repository";

@Service()
class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly similarPostRepository: SimilarPostRepository,
    private readonly storageService: StorageService,
    private readonly mediaService: MediaService,
    private readonly mediaHelper: MediaHelper,
    private readonly paginationHelper: PaginationHelper,
    private readonly similarPostsRecommenderService: SimilarPostsRecommenderService,
    private readonly jsonHelper: JsonHelper,
  ) {}

  public async trainSimilarPostRecommender(): Promise<boolean> {
    const posts = await this.postRepository.getAllPosts();

    const documents = posts.map(post => {
      const id = post.id;
      const caption = post.caption || "";
      const metaTags = post.metaTags as Prisma.JsonArray;

      const tagsString = post.tags?.map(tag => tag.name).join(" ");
      const metaTagsString = metaTags
        ?.map((metaTag: IMetaTag) => metaTag.tag)
        .join(" ");

      const content = `${caption} ${tagsString} ${metaTagsString}`;

      return {
        id,
        content,
      };
    });

    this.similarPostsRecommenderService.train(documents);

    const exportedData = this.similarPostsRecommenderService.export();

    await this.similarPostRepository.saveTrainingExportedData(exportedData);

    return true;
  }

  public async trainSimilarPostRecommenderWithSinglePost(): Promise<boolean> {
    const { trainedData, processedDocs, docVectors } =
      await this.similarPostRepository.getTrainingData();

    const document = {
      id: nanoid(),
      content: "Waiting For (feat. Jamila Woods) rum.gold JamilaWoods",
    };

    this.similarPostsRecommenderService.import({
      data: {},
      trainedData,
      processedDocs,
      docVectors,
    });

    const data =
      this.similarPostsRecommenderService.trainWithSingleDoc(document);

    await this.similarPostRepository.createNewTrainindDataEntry(data);

    const scoreMap = new Map<string, number>();
    const ids = data.trainedDataEntry.similarPosts.map(post => {
      scoreMap.set(post.id, post.score);
      return post.id;
    });
    const entries = await this.similarPostRepository.getTrainingDataEntries(
      ids,
    );
    console.log(entries);

    const updatedEntries = entries.map(entry => ({
      ...entry,
      similarPosts: [
        ...entry.similarPosts,
        {
          id: data.trainedDataEntry.id,
          score: scoreMap.get(entry.id),
        },
      ].sort((a, b) => b.score - a.score),
    }));

    await this.similarPostRepository.updateExistingEntries(updatedEntries);

    console.log(data, data.trainedDataEntry, updatedEntries);

    return true;
  }

  public async getPost({
    userId,
    postId,
  }: IGetPostParams): Promise<PostOutput> {
    return this.postRepository.getPost({ userId, postId });
  }

  public async getUserPosts({
    userId,
    paginationInput,
  }: IGetPostsParams): Promise<GetPostsOutput> {
    const posts = await this.postRepository.getUserPosts({
      userId,
      paginationInput,
    });

    return {
      data: posts,
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
  }: IGetPostsParams): Promise<BookmarksOutput> {
    const bookmarks = await this.postRepository.getBookmarkedPosts({
      paginationInput,
      userId,
    });
    return {
      data: bookmarks,
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
  }: IGetPostsParams): Promise<GetPostsOutput> {
    const posts = await this.postRepository.getExplorePosts({
      paginationInput,
      userId,
    });
    return {
      data: posts,
      pagination: {
        cursor: this.paginationHelper.getCursor<Post>({
          results: posts,
          key: "id",
        }),
      },
    };
  }

  public async getRelatedPosts({
    userId,
    postId,
    paginationInput,
  }: IGetRelatedPostsParams): Promise<GetPostsOutput> {
    const post = await this.postRepository.getPost({ postId, userId });

    if (!post) {
      return {
        data: [],
        pagination: {
          cursor: null,
        },
      };
    }

    const posts = await this.postRepository.getRelatedPosts({
      paginationInput,
      userId,
      postId,
      tags: post.tags,
      metaTags: post.metaTags,
    });

    return {
      data: posts,
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
    try {
      await this.postRepository.addPostBookmark({ postId, userId });
      return true;
    } catch (error) {
      if ((error as PrismaClientKnownRequestError).code === "P2002") {
        await this.postRepository.deletePostBookmark({ postId, userId });
        return false;
      }
    }
  }

  public async incrementPostView(postId: string): Promise<boolean> {
    await this.postRepository.incrementPostView(postId);
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
    const clipThumbnailResponse = await this.uploadThumbnail({
      thumbnailReadStream,
      thumbnailFilename,
      metadata,
      containerName: AzureContainersEnum.CLIP,
    });

    thumbnailFileUrl = clipThumbnailResponse.fileUrl;
    const metaData = clipThumbnailResponse.metadata;

    return new Promise<Post>(async resolve => {
      await this.storageService.uploadFiles(
        this.compressVideoMedia([clipMedia], mediaFiles),
        {
          containerName: AzureContainersEnum[addClipPostInput.type],
          onCompletion: async (_uploadResponse, fileUrls) => {
            const post = await this.postRepository.addClipPost({
              userId,
              metaData,
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
    let videoMetaData: FfprobeData;
    let metaData: IMetaData = { metaTags: [] };

    const mediaFiles = await Promise.all(media);

    this.validateMediaType(mediaFiles, addMediaPostInput.type);

    switch (addMediaPostInput.type) {
      case PostType.VIDEO:
        const videoThumbnailInput = await this.mediaService.getVideoThumbnail(
          mediaFiles[0],
        );

        videoMetaData = videoThumbnailInput.metadata;

        const videoThumbnailResponse = await this.uploadThumbnail({
          ...videoThumbnailInput,
          containerName: AzureContainersEnum.VIDEO,
        });
        thumbnailFileUrl = videoThumbnailResponse.fileUrl;
        metaData = videoThumbnailResponse.metadata;

        break;

      case PostType.AUDIO:
        const thumbnail = await mediaThumbnail;

        if (!thumbnail) break;

        const audioThumbnailInput: IGetVideoThumbnail = {
          thumbnailFilename: thumbnail.filename,
          thumbnailReadStream: thumbnail.createReadStream,
        };

        const audioThumbnailResponse = await this.uploadThumbnail({
          ...audioThumbnailInput,
          containerName: AzureContainersEnum.AUDIO,
        });
        thumbnailFileUrl = audioThumbnailResponse.fileUrl;
        metaData = audioThumbnailResponse.metadata;

        break;
    }

    this.validateAddMediaPostInput({
      addPostInput: addMediaPostInput,
      media,
      metadata: videoMetaData,
    });

    return new Promise<Post>(async resolve => {
      await this.storageService.uploadFiles(
        this.compressVideoMedia(media, mediaFiles),
        {
          containerName: AzureContainersEnum[addMediaPostInput.type],
          onCompletion: async (uploadResponse, fileUrls) => {
            if (metaData?.metaTags?.length === 0) {
              uploadResponse = uploadResponse as IUploadApiResponse[];
              const photoMetaTags: IMetaTag[] = [];
              uploadResponse?.map(response =>
                photoMetaTags.push(...(response?.metadata?.metaTags || [])),
              );
              metaData.metaTags = photoMetaTags;
            }
            const post = await this.postRepository.addMediaPost({
              userId,
              metaData,
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
  ): Promise<IUploadThumbnailResponse> {
    const { thumbnailReadStream, thumbnailFilename, containerName } =
      thumbnailInput;

    return new Promise<IUploadThumbnailResponse>(async resolve => {
      await this.storageService.uploadFile(
        {
          filename: thumbnailFilename,
          createReadStream: thumbnailReadStream,
        },
        {
          containerName,
          folder: SubFoldersEnum.thumbnail,
          onSuccess: async (uploadResponse, fileUrl) => {
            resolve({ fileUrl, metadata: uploadResponse.metadata });
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
