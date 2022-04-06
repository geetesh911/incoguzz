import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookmarkArgs } from "./args/AggregateBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
import { AggregateBookmark } from "../../outputs/AggregateBookmark";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class AggregateBookmarkResolver {
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
}
