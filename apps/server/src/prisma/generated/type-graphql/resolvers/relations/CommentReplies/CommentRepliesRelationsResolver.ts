import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { CommentReplies } from "../../../models/CommentReplies";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentReplies)
export class CommentRepliesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Comment, {
    nullable: false,
  })
  async repliedTo(
    @TypeGraphQL.Root() commentReplies: CommentReplies,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Comment> {
    return getPrismaFromContext(ctx)
      .commentReplies.findUnique({
        where: {
          id: commentReplies.id,
        },
      })
      .repliedTo({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() commentReplies: CommentReplies,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .commentReplies.findUnique({
        where: {
          id: commentReplies.id,
        },
      })
      .user({});
  }
}
