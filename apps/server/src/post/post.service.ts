import { MediaLimits } from "@/common/enums/media.enum";
import MediaHelper from "@/common/helpers/media.helper";
import { IGetVideoThumbnail } from "@/common/interfaces/media.interface";
import {
  optimizeVideoExtensions,
  validAudioExtensions,
  validImageExtensions,
  validVideoExtensions,
} from "@/common/lists/media.list";
import MediaService from "@/common/services/media.service";
import StorageService from "@/common/services/storage.service";
import { Post, PostType } from "@/prisma/generated/type-graphql";
import { AzureContainersEnum, SubFoldersEnum } from "@/user/enums/file.enum";
import { logger } from "@azure/storage-blob";
import { UserInputError } from "apollo-server-errors";
import { FfprobeData } from "fluent-ffmpeg";
import { FileUpload } from "graphql-upload";
import { Service } from "typedi";
import {
  AddClipPostInput,
  AddMediaPostInput,
  AddPollPostInput,
  AddTextualPostInput,
} from "./inputs/add-post.input";
import PostRepository from "./repositories/post.repository";

@Service()
class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly storageService: StorageService,
    private readonly mediaService: MediaService,
    private readonly mediaHelper: MediaHelper,
  ) {}

  public async getUserPosts(userId: string): Promise<Post[]> {
    return this.postRepository.getUserPosts(userId);
  }

  public async addTextualPost(
    userId: string,
    addTextualPostInput: AddTextualPostInput,
  ): Promise<Post> {
    this.validateAddTextualPostInput(addTextualPostInput);

    return this.postRepository.addTextualPost(userId, addTextualPostInput);
  }

  public async addPollPost(
    userId: string,
    addPollPostInput: AddPollPostInput,
  ): Promise<Post> {
    this.validateAddPollPostInput(addPollPostInput);

    return this.postRepository.addPollPost(userId, addPollPostInput);
  }

  public async addClipPost(
    userId: string,
    addClipPostInput: AddClipPostInput,
    clipMedia: Promise<FileUpload>,
    clipAudioMedia: Promise<FileUpload>,
  ): Promise<Post> {
    console.log(userId, addClipPostInput, clipMedia, clipAudioMedia);
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

    this.validateAddMediaPostInput(addClipPostInput, [clipMedia], metadata);

    audioName = audioFilename;

    audioFileUrl = await new Promise<string>(async resolve => {
      await this.storageService.uploadFile(
        { filename: audioFilename, createReadStream: audioReadStream },
        {
          containerName: AzureContainersEnum.audio,
          onSuccess: async (uploadResponse, fileUrl) => {
            resolve(fileUrl);
          },
          onError: async error => {
            logger.info(error);
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

    // this.validateAddMediaPostInput(addPostInput, media, metaData);

    return new Promise<Post>(async resolve => {
      await this.storageService.uploadFiles(
        this.compressVideoMedia([clipMedia], mediaFiles),
        {
          containerName: AzureContainersEnum[addClipPostInput.type],
          onCompletion: async (uploadResponse, fileUrls) => {
            const post = await this.postRepository.addClipPost(
              userId,
              addClipPostInput,
              fileUrls,
              {
                audioUrl: audioFileUrl,
                thumbnailUrl: thumbnailFileUrl,
                audioName,
              },
            );
            resolve(post);
          },
          onError: async error => {
            logger.info(error);
            throw new Error("Something went wrong");
          },
        },
      );
    });
  }

  public async addMediaPost(
    userId: string,
    addPostInput: AddMediaPostInput,
    media: Promise<FileUpload>[],
  ): Promise<Post> {
    let thumbnailFileUrl = "";
    let metaData: FfprobeData;

    const mediaFiles = await Promise.all(media);

    this.validateMediaType(mediaFiles, addPostInput.type);

    if (addPostInput.type === PostType.VIDEO) {
      const videoThumbnailInput = await this.mediaService.getVideoThumbnail(
        mediaFiles[0],
      );

      metaData = videoThumbnailInput.metadata;

      thumbnailFileUrl = await this.uploadThumbnail({
        ...videoThumbnailInput,
        containerName: AzureContainersEnum.VIDEO,
      });
    }

    this.validateAddMediaPostInput(addPostInput, media, metaData);

    return new Promise<Post>(async resolve => {
      await this.storageService.uploadFiles(
        this.compressVideoMedia(media, mediaFiles),
        {
          containerName: AzureContainersEnum[addPostInput.type],
          onCompletion: async (uploadResponse, fileUrls) => {
            const post = await this.postRepository.addMediaPost(
              userId,
              addPostInput,
              fileUrls,
              {
                thumbnailUrl: thumbnailFileUrl,
              },
            );
            resolve(post);
          },
          onError: async error => {
            logger.info(error);
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
          onSuccess: async (uploadResponse, fileUrl) => {
            resolve(fileUrl);
          },
          onError: async error => {
            logger.info(error);
            console.log(error);
            throw new Error("Something went wrong");
          },
        },
      );
    });
  }

  private validateAddMediaPostInput(
    addPostInput: AddMediaPostInput,
    media: Promise<FileUpload>[],
    metadata: FfprobeData,
  ): void {
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
