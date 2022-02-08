import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCountOrderByAggregateInput } from "../inputs/FollowerCountOrderByAggregateInput";
import { FollowerMaxOrderByAggregateInput } from "../inputs/FollowerMaxOrderByAggregateInput";
import { FollowerMinOrderByAggregateInput } from "../inputs/FollowerMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowerOrderByWithAggregationInput", {
  isAbstract: true,
})
export class FollowerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => FollowerCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: FollowerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: FollowerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: FollowerMinOrderByAggregateInput | undefined;
}
