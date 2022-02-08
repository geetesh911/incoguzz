import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCountOrderByAggregateInput } from "../inputs/StoryCountOrderByAggregateInput";
import { StoryMaxOrderByAggregateInput } from "../inputs/StoryMaxOrderByAggregateInput";
import { StoryMinOrderByAggregateInput } from "../inputs/StoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StoryOrderByWithAggregationInput", {
  isAbstract: true,
})
export class StoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  mediaUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  link?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => StoryCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: StoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoryMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: StoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoryMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: StoryMinOrderByAggregateInput | undefined;
}
