import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCommentRepliesArgs } from "./args/FindManyCommentRepliesArgs";
import { CommentReplies } from "../../../models/CommentReplies";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentReplies)
export class FindManyCommentRepliesResolver {
  @TypeGraphQL.Query(_returns => [CommentReplies], {
    nullable: false,
  })
  async findManyCommentReplies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCommentRepliesArgs,
  ): Promise<CommentReplies[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).commentReplies.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
