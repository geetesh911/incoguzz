import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteBookmarkArgs } from "./args/DeleteBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class DeleteBookmarkResolver {
  @TypeGraphQL.Mutation(_returns => Bookmark, {
    nullable: true,
  })
  async deleteBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookmarkArgs,
  ): Promise<Bookmark | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
