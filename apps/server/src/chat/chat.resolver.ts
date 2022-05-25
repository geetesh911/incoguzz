import {
  Resolver,
  Subscription,
  Root,
  Mutation,
  PubSub,
  Args,
  Publisher,
  Ctx,
  Query,
  Arg,
} from "type-graphql";
import { injectable } from "tsyringe";
import { withFilter } from "graphql-subscriptions";
import {
  Context,
  ISubscriptionContext,
} from "@/common/interfaces/context.interface";
import { Authorized } from "@/auth/decorators/auth-checker.decorator";
import { ChatSubscriptions } from "./enums/chat-subscription.enum";
import { NewMessageArgs } from "./args/new-message.args";
import { ChatService } from "./chat.service";
import { GetMessagesOuput, MessageOutput } from "./outputs/get-messages.output";
import { GetMessageArgs } from "./args/get-messages.args";

@injectable()
@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Authorized()
  @Query(() => GetMessagesOuput)
  async getMessages(
    @Ctx() { user }: Context,
    @Args() { targetUserId, paginationInput }: GetMessageArgs,
  ): Promise<GetMessagesOuput> {
    return this.chatService.getMessages({
      sourceUserId: user.userId,
      targetUserId,
      paginationInput,
    });
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteMessage(
    @Arg("messageId", () => String) messageId: string,
  ): Promise<boolean> {
    return this.chatService.deleteMessage(messageId);
  }

  @Authorized()
  @Mutation(() => MessageOutput)
  async addMessage(
    @Ctx() { user }: Context,
    @PubSub(ChatSubscriptions.NEW_MESSAGE)
    publish: Publisher<MessageOutput>,
    @Args() { newMessageInput, media }: NewMessageArgs,
  ): Promise<MessageOutput> {
    const message = await this.chatService.addMessage({
      messageInput: newMessageInput,
      media,
      userId: user.userId,
    });
    await publish(message);
    return message;
  }

  @Subscription({
    subscribe: withFilter(
      (_root, _args, context: ISubscriptionContext) => {
        return context.pubSub.asyncIterator(ChatSubscriptions.NEW_MESSAGE);
      },
      (_payload, _args, context: ISubscriptionContext) => {
        return context.isAuthenticated;
      },
    ),
  })
  newMessage(@Root() messagePayload: MessageOutput): MessageOutput {
    return messagePayload;
  }

  @Subscription({
    subscribe: withFilter(
      (_root, _args, context: ISubscriptionContext) => {
        return context.pubSub.asyncIterator(
          ChatSubscriptions.NEW_MESSAGE_NOTIFICATION,
        );
      },
      (_payload, _args, context: ISubscriptionContext) => {
        return context.isAuthenticated;
      },
    ),
  })
  newMessageNotification(@Root() messagePayload: MessageOutput): MessageOutput {
    return messagePayload;
  }
}
