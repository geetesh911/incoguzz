import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCountOrderByAggregateInput } from "../inputs/FollowRequestCountOrderByAggregateInput";
import { FollowRequestMaxOrderByAggregateInput } from "../inputs/FollowRequestMaxOrderByAggregateInput";
import { FollowRequestMinOrderByAggregateInput } from "../inputs/FollowRequestMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowRequestOrderByWithAggregationInput", {
  isAbstract: true,
})
export class FollowRequestOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  message?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => FollowRequestCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: FollowRequestCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowRequestMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: FollowRequestMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowRequestMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: FollowRequestMinOrderByAggregateInput | undefined;
}
