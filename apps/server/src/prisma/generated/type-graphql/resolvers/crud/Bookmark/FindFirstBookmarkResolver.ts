import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBookmarkArgs } from "./args/FindFirstBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class FindFirstBookmarkResolver {
  @TypeGraphQL.Query(_returns => Bookmark, {
    nullable: true,
  })
  async findFirstBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookmarkArgs,
  ): Promise<Bookmark | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
