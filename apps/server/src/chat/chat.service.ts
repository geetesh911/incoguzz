import { MediaLimits } from "@/common/enums/media.enum";
import MediaHelper from "@/common/helpers/media.helper";
import PaginationHelper from "@/common/helpers/pagination.helper";
import {
  validAudioExtensions,
  validImageExtensions,
  validVideoExtensions,
} from "@/common/lists/media.list";
import MediaService from "@/common/services/media.service";
import StorageService from "@/common/services/storage.service";
import PostService from "@/post/post.service";
import { Message, MessageMediaType } from "@/prisma/generated/type-graphql";
import { AzureContainersEnum } from "@/user/enums/file.enum";
import { logger } from "@/utils/logger";
import { UserInputError } from "apollo-server-core";
import { FfprobeData } from "fluent-ffmpeg";
import { FileUpload } from "graphql-upload";
import { injectable } from "tsyringe";
import { IAddMessageParams } from "./interfaces/add-message.interface";
import { IGetMessagesParams } from "./interfaces/get-messages.interface";
import { GetMessagesOuput, MessageOutput } from "./outputs/get-messages.output";
import { ChatRepository } from "./repositories/chat.repository";

@injectable()
export class ChatService {
  constructor(
    private readonly storageService: StorageService,
    private readonly postService: PostService,
    private readonly chatRepository: ChatRepository,
    private readonly mediaHelper: MediaHelper,
    private readonly mediaService: MediaService,
    private readonly paginationHelper: PaginationHelper,
  ) {}

  public async getMessages({
    sourceUserId,
    targetUserId,
    paginationInput,
  }: IGetMessagesParams): Promise<GetMessagesOuput> {
    const messages = await this.chatRepository.getMessages({
      sourceUserId,
      targetUserId,
      paginationInput,
    });

    return {
      data: messages,
      pagination: {
        cursor: this.paginationHelper.getCursor<Message>({
          results: messages,
          key: "id",
        }),
      },
    };
  }

  public async addMessage({
    messageInput,
    media,
    userId,
  }: IAddMessageParams): Promise<MessageOutput> {
    if (media) {
      return this.addMediaMessage({ messageInput, media, userId });
    }
    return this.chatRepository.addMessage({
      userId,
      messageInput,
    });
  }

  private async addMediaMessage({
    messageInput,
    media,
    userId,
  }: IAddMessageParams): Promise<Message> {
    return new Promise<Message>(async (resolve, reject) => {
      let thumbnailFileUrl: string;
      let videoMetaData: FfprobeData;

      const mediaFiles = await Promise.all([media]);

      this.validateMediaType(mediaFiles, messageInput.mediaType);

      if (messageInput.mediaType === MessageMediaType.VIDEO) {
        const videoThumbnailInput = await this.mediaService.getVideoThumbnail(
          mediaFiles[0],
        );

        videoMetaData = videoThumbnailInput.metadata;

        const videoThumbnailResponse = await this.postService.uploadThumbnail({
          ...videoThumbnailInput,
          containerName: AzureContainersEnum.message,
        });
        thumbnailFileUrl = videoThumbnailResponse.fileUrl;
      }

      this.validateMedia(videoMetaData);

      try {
        const messageResponse = await new Promise<Message>(
          async resolveMessage => {
            await this.storageService.uploadFiles(
              this.postService.compressVideoMedia([media], mediaFiles),
              {
                containerName: AzureContainersEnum.message,
                disableMetaTags: true,
                onCompletion: async (_uploadResponse, fileUrls) => {
                  const message = await this.chatRepository.addMessage({
                    userId,
                    mediaUrl: fileUrls[0],
                    mediaThumbnailUrl: thumbnailFileUrl,
                    messageInput,
                  });

                  resolveMessage(message);
                },
                onError: async error => {
                  logger.error(error);
                  throw new Error("Something went wrong");
                },
              },
            );
          },
        );

        resolve(messageResponse);
      } catch (error) {
        reject(error);
      }
    });
  }

  private validateMediaType(
    mediaFiles: FileUpload[],
    messageType: MessageMediaType,
  ): void {
    const extension = this.mediaHelper
      .getFileExtension(mediaFiles[0]?.filename)
      .toLowerCase();

    if (mediaFiles.length > 1)
      throw new UserInputError("Multiple media not allowed");

    switch (messageType) {
      case MessageMediaType.VIDEO:
        if (!validVideoExtensions.includes(extension))
          throw new UserInputError("Invalid video type");
        break;

      case MessageMediaType.IMAGE:
        if (!validImageExtensions.includes(extension))
          throw new UserInputError("Invalid image type");
        break;

      case MessageMediaType.AUDIO:
        if (!validAudioExtensions.includes(extension))
          throw new UserInputError("Invalid image type");
        break;

      default:
        break;
    }
  }

  private validateMedia(metadata: FfprobeData): void {
    const size = metadata?.format?.size;

    const sizeLimit = MediaLimits.sizeLimit;

    if (size > sizeLimit) throw new Error("Too big size");
  }
}
