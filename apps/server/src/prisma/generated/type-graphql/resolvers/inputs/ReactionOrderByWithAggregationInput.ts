import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCountOrderByAggregateInput } from "../inputs/ReactionCountOrderByAggregateInput";
import { ReactionMaxOrderByAggregateInput } from "../inputs/ReactionMaxOrderByAggregateInput";
import { ReactionMinOrderByAggregateInput } from "../inputs/ReactionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReactionOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ReactionOrderByWithAggregationInput {
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
  reaction?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReactionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ReactionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ReactionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ReactionMinOrderByAggregateInput | undefined;
}
