import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCountOrderByAggregateInput } from "../inputs/BlockedCountOrderByAggregateInput";
import { BlockedMaxOrderByAggregateInput } from "../inputs/BlockedMaxOrderByAggregateInput";
import { BlockedMinOrderByAggregateInput } from "../inputs/BlockedMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BlockedOrderByWithAggregationInput", {
  isAbstract: true,
})
export class BlockedOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  sourceUserId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  targetUserId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BlockedCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: BlockedCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockedMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: BlockedMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockedMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: BlockedMinOrderByAggregateInput | undefined;
}
