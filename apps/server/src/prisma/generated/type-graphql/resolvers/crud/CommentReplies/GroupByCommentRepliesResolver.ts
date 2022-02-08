import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCommentRepliesArgs } from "./args/GroupByCommentRepliesArgs";
import { CommentReplies } from "../../../models/CommentReplies";
import { CommentRepliesGroupBy } from "../../outputs/CommentRepliesGroupBy";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentReplies)
export class GroupByCommentRepliesResolver {
  @TypeGraphQL.Query(_returns => [CommentRepliesGroupBy], {
    nullable: false,
  })
  async groupByCommentReplies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCommentRepliesArgs,
  ): Promise<CommentRepliesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).commentReplies.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
