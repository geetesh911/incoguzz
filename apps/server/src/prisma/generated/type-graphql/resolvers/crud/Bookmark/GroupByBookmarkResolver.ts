import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBookmarkArgs } from "./args/GroupByBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
import { BookmarkGroupBy } from "../../outputs/BookmarkGroupBy";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class GroupByBookmarkResolver {
  @TypeGraphQL.Query(_returns => [BookmarkGroupBy], {
    nullable: false,
  })
  async groupByBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookmarkArgs,
  ): Promise<BookmarkGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).bookmark.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
