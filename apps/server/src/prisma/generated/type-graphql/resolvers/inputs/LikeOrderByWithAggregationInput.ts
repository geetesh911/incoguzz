import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCountOrderByAggregateInput } from "../inputs/LikeCountOrderByAggregateInput";
import { LikeMaxOrderByAggregateInput } from "../inputs/LikeMaxOrderByAggregateInput";
import { LikeMinOrderByAggregateInput } from "../inputs/LikeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LikeOrderByWithAggregationInput", {
  isAbstract: true,
})
export class LikeOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => LikeCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: LikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LikeMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: LikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LikeMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: LikeMinOrderByAggregateInput | undefined;
}
