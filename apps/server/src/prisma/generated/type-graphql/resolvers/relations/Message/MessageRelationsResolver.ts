import * as TypeGraphQL from "type-graphql";
import { Message } from "../../../models/Message";
import { Post } from "../../../models/Post";
import { Story } from "../../../models/Story";
import { User } from "../../../models/User";
import { MessageReplyToMessageArgs } from "./args/MessageReplyToMessageArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Message)
export class MessageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: true,
  })
  async post(
    @TypeGraphQL.Root() message: Message,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post | null> {
    return getPrismaFromContext(ctx)
      .message.findUnique({
        where: {
          id: message.id,
        },
      })
      .post({});
  }

  @TypeGraphQL.FieldResolver(_type => Story, {
    nullable: true,
  })
  async story(
    @TypeGraphQL.Root() message: Message,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Story | null> {
    return getPrismaFromContext(ctx)
      .message.findUnique({
        where: {
          id: message.id,
        },
      })
      .story({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async sourceUser(
    @TypeGraphQL.Root() message: Message,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .message.findUnique({
        where: {
          id: message.id,
        },
      })
      .sourceUser({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async targetUser(
    @TypeGraphQL.Root() message: Message,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .message.findUnique({
        where: {
          id: message.id,
        },
      })
      .targetUser({});
  }

  @TypeGraphQL.FieldResolver(_type => Message, {
    nullable: true,
  })
  async replyTo(
    @TypeGraphQL.Root() message: Message,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Message | null> {
    return getPrismaFromContext(ctx)
      .message.findUnique({
        where: {
          id: message.id,
        },
      })
      .replyTo({});
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false,
  })
  async replyToMessage(
    @TypeGraphQL.Root() message: Message,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: MessageReplyToMessageArgs,
  ): Promise<Message[]> {
    return getPrismaFromContext(ctx)
      .message.findUnique({
        where: {
          id: message.id,
        },
      })
      .replyToMessage(args);
  }
}
