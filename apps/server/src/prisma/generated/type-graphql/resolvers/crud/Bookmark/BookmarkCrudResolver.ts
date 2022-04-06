import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookmarkArgs } from "./args/AggregateBookmarkArgs";
import { CreateBookmarkArgs } from "./args/CreateBookmarkArgs";
import { CreateManyBookmarkArgs } from "./args/CreateManyBookmarkArgs";
import { DeleteBookmarkArgs } from "./args/DeleteBookmarkArgs";
import { DeleteManyBookmarkArgs } from "./args/DeleteManyBookmarkArgs";
import { FindFirstBookmarkArgs } from "./args/FindFirstBookmarkArgs";
import { FindManyBookmarkArgs } from "./args/FindManyBookmarkArgs";
import { FindUniqueBookmarkArgs } from "./args/FindUniqueBookmarkArgs";
import { GroupByBookmarkArgs } from "./args/GroupByBookmarkArgs";
import { UpdateBookmarkArgs } from "./args/UpdateBookmarkArgs";
import { UpdateManyBookmarkArgs } from "./args/UpdateManyBookmarkArgs";
import { UpsertBookmarkArgs } from "./args/UpsertBookmarkArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Bookmark } from "../../../models/Bookmark";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookmark } from "../../outputs/AggregateBookmark";
import { BookmarkGroupBy } from "../../outputs/BookmarkGroupBy";

@TypeGraphQL.Resolver(_of => Bookmark)
export class BookmarkCrudResolver {
  @TypeGraphQL.Query(_returns => Bookmark, {
    nullable: true,
  })
  async bookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookmarkArgs,
  ): Promise<Bookmark | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [Bookmark], {
    nullable: false,
  })
  async bookmarks(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookmarkArgs,
  ): Promise<Bookmark[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookmarkArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => Bookmark, {
    nullable: true,
  })
  async updateBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookmarkArgs,
  ): Promise<Bookmark | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookmarkArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookmarkArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Bookmark, {
    nullable: false,
  })
  async upsertBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookmarkArgs,
  ): Promise<Bookmark> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).bookmark.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateBookmark, {
    nullable: false,
  })
  async aggregateBookmark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookmarkArgs,
  ): Promise<AggregateBookmark> {
    return getPrismaFromContext(ctx).bookmark.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
