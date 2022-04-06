import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkOrderByWithAggregationInput } from "../../../inputs/BookmarkOrderByWithAggregationInput";
import { BookmarkScalarWhereWithAggregatesInput } from "../../../inputs/BookmarkScalarWhereWithAggregatesInput";
import { BookmarkWhereInput } from "../../../inputs/BookmarkWhereInput";
import { BookmarkScalarFieldEnum } from "../../../../enums/BookmarkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true,
  })
  where?: BookmarkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookmarkOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: BookmarkOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "postId" | "userId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => BookmarkScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: BookmarkScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
