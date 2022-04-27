import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceOrderByRelevanceInput } from "../inputs/PlaceOrderByRelevanceInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlaceOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class PlaceOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true,
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaceOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: PlaceOrderByRelevanceInput | undefined;
}
