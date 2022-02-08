import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCountOrderByAggregateInput } from "../inputs/ClipCountOrderByAggregateInput";
import { ClipMaxOrderByAggregateInput } from "../inputs/ClipMaxOrderByAggregateInput";
import { ClipMinOrderByAggregateInput } from "../inputs/ClipMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClipOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ClipOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  thumbnailUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  clipAudioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClipCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ClipCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClipMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ClipMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClipMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ClipMinOrderByAggregateInput | undefined;
}
