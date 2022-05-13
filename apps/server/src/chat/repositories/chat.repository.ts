import BaseRepository from "@/common/repositories/BaseRepository";
import PrismaService from "@/common/services/prisma.service";
import { Message } from "@/prisma/generated/type-graphql";
import { injectable } from "tsyringe";
import { IAddMessageRepoParams } from "../interfaces/add-message.interface";
import { IGetMessagesParams } from "../interfaces/get-messages.interface";
import { Prisma } from "@prisma/client";

interface IReader {
  getMessages: (params: IGetMessagesParams) => Promise<Message[]>;
}

interface IWriter {
  addMessage: (params: IAddMessageRepoParams) => Promise<Message>;
}

type TChatRepository = IReader & IWriter;

@injectable()
export class ChatRepository extends BaseRepository implements TChatRepository {
  constructor(private readonly prisma: PrismaService) {
    super("chat");
  }

  private getMessagesIncludeArgs(): Prisma.MessageFindManyArgs["include"] {
    return {
      sourceUser: true,
      targetUser: true,
      post: true,
    };
  }

  public async getMessages({
    sourceUserId,
    targetUserId,
    paginationInput,
  }: IGetMessagesParams): Promise<Message[]> {
    return this.prisma.message.findMany({
      ...this.getPaginationArgs<Prisma.MessageWhereUniqueInput>(
        paginationInput,
      ),
      where: {
        AND: [
          { sourceUser: { id: sourceUserId } },
          { targetUser: { id: targetUserId } },
        ],
      },
      include: {
        ...this.getMessagesIncludeArgs(),
      },
    });
  }

  public async addMessage({
    messageInput,
    userId,
    mediaUrl,
    mediaThumbnailUrl,
  }: IAddMessageRepoParams): Promise<Message> {
    const { mediaType, message, targetUserId, storyId, postId, replyToId } =
      messageInput;
    return this.prisma.message.create({
      data: {
        mediaType,
        message,
        mediaUrl,
        mediaThumbnailUrl,
        replyTo: replyToId && { connect: { id: replyToId } },
        story: storyId && { connect: { id: storyId } },
        post: postId && { connect: { id: postId } },
        sourceUser: { connect: { id: userId } },
        targetUser: { connect: { id: targetUserId } },
      },
      include: {
        ...this.getMessagesIncludeArgs(),
      },
    });
  }
}
