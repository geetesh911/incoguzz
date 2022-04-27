import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioOrderByRelevanceInput } from "../inputs/ClipAudioOrderByRelevanceInput";
import { ClipOrderByRelationAggregateInput } from "../inputs/ClipOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClipAudioOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class ClipAudioOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => ClipOrderByRelationAggregateInput, {
    nullable: true,
  })
  clips?: ClipOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: ClipAudioOrderByRelevanceInput | undefined;
}
