import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteCommentRepliesArgs } from "./args/DeleteCommentRepliesArgs";
import { CommentReplies } from "../../../models/CommentReplies";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentReplies)
export class DeleteCommentRepliesResolver {
  @TypeGraphQL.Mutation(_returns => CommentReplies, {
    nullable: true,
  })
  async deleteCommentReplies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCommentRepliesArgs,
  ): Promise<CommentReplies | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).commentReplies.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
