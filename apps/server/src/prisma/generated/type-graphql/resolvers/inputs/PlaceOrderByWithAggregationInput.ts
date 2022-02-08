import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCountOrderByAggregateInput } from "../inputs/PlaceCountOrderByAggregateInput";
import { PlaceMaxOrderByAggregateInput } from "../inputs/PlaceMaxOrderByAggregateInput";
import { PlaceMinOrderByAggregateInput } from "../inputs/PlaceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlaceOrderByWithAggregationInput", {
  isAbstract: true,
})
export class PlaceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlaceCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PlaceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaceMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PlaceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaceMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PlaceMinOrderByAggregateInput | undefined;
}
