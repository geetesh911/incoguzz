import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCountOrderByAggregateInput } from "../inputs/BookmarkCountOrderByAggregateInput";
import { BookmarkMaxOrderByAggregateInput } from "../inputs/BookmarkMaxOrderByAggregateInput";
import { BookmarkMinOrderByAggregateInput } from "../inputs/BookmarkMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookmarkOrderByWithAggregationInput", {
  isAbstract: true,
})
export class BookmarkOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookmarkCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: BookmarkCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: BookmarkMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: BookmarkMinOrderByAggregateInput | undefined;
}
