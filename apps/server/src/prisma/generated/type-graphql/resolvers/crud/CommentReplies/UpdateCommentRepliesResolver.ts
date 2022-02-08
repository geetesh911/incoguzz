import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateCommentRepliesArgs } from "./args/UpdateCommentRepliesArgs";
import { CommentReplies } from "../../../models/CommentReplies";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentReplies)
export class UpdateCommentRepliesResolver {
  @TypeGraphQL.Mutation(_returns => CommentReplies, {
    nullable: true,
  })
  async updateCommentReplies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCommentRepliesArgs,
  ): Promise<CommentReplies | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).commentReplies.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
