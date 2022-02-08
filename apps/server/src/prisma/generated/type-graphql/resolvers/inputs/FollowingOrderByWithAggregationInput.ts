import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingCountOrderByAggregateInput } from "../inputs/FollowingCountOrderByAggregateInput";
import { FollowingMaxOrderByAggregateInput } from "../inputs/FollowingMaxOrderByAggregateInput";
import { FollowingMinOrderByAggregateInput } from "../inputs/FollowingMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowingOrderByWithAggregationInput", {
  isAbstract: true,
})
export class FollowingOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => FollowingCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: FollowingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowingMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: FollowingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowingMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: FollowingMinOrderByAggregateInput | undefined;
}
