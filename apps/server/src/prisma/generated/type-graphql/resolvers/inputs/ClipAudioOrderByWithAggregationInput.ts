import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCountOrderByAggregateInput } from "../inputs/ClipAudioCountOrderByAggregateInput";
import { ClipAudioMaxOrderByAggregateInput } from "../inputs/ClipAudioMaxOrderByAggregateInput";
import { ClipAudioMinOrderByAggregateInput } from "../inputs/ClipAudioMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClipAudioOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ClipAudioOrderByWithAggregationInput {
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
  audioUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClipAudioCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ClipAudioCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ClipAudioMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ClipAudioMinOrderByAggregateInput | undefined;
}
