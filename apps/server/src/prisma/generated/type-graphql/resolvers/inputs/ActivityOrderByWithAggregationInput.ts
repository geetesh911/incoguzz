import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCountOrderByAggregateInput } from "../inputs/ActivityCountOrderByAggregateInput";
import { ActivityMaxOrderByAggregateInput } from "../inputs/ActivityMaxOrderByAggregateInput";
import { ActivityMinOrderByAggregateInput } from "../inputs/ActivityMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActivityOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ActivityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActivityCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ActivityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ActivityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ActivityMinOrderByAggregateInput | undefined;
}
