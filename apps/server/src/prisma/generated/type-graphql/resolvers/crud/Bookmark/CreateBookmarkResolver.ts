import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateBookmarkArgs } from "./args/CreateBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class CreateBookmarkResolver {
  @TypeGraphQL.Mutation(_returns => Bookmark, {
    nullable: false,
  })
  async createBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookmarkArgs,
  ): Promise<Bookmark> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
