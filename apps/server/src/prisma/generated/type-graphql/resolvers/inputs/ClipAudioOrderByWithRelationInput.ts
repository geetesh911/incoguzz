import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipOrderByRelationAggregateInput } from "../inputs/ClipOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClipAudioOrderByWithRelationInput", {
  isAbstract: true,
})
export class ClipAudioOrderByWithRelationInput {
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
}
