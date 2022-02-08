import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { CommentReplies } from "../../../models/CommentReplies";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { CommentCommentRepliesArgs } from "./args/CommentCommentRepliesArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() comment: Comment,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .comment.findUnique({
        where: {
          id: comment.id,
        },
      })
      .post({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() comment: Comment,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .comment.findUnique({
        where: {
          id: comment.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => [CommentReplies], {
    nullable: false,
  })
  async commentReplies(
    @TypeGraphQL.Root() comment: Comment,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CommentCommentRepliesArgs,
  ): Promise<CommentReplies[]> {
    return getPrismaFromContext(ctx)
      .comment.findUnique({
        where: {
          id: comment.id,
        },
      })
      .commentReplies(args);
  }
}
