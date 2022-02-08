import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertCommentRepliesArgs } from "./args/UpsertCommentRepliesArgs";
import { CommentReplies } from "../../../models/CommentReplies";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentReplies)
export class UpsertCommentRepliesResolver {
  @TypeGraphQL.Mutation(_returns => CommentReplies, {
    nullable: false,
  })
  async upsertCommentReplies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCommentRepliesArgs,
  ): Promise<CommentReplies> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).commentReplies.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
