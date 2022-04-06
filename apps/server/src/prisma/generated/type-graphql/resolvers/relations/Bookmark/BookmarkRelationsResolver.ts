import * as TypeGraphQL from "type-graphql";
import { Bookmark } from "../../../models/Bookmark";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class BookmarkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() bookmark: Bookmark,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .bookmark.findUnique({
        where: {
          id: bookmark.id,
        },
      })
      .post({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() bookmark: Bookmark,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .bookmark.findUnique({
        where: {
          id: bookmark.id,
        },
      })
      .user({});
  }
}
