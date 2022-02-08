import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ClipAudioScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ClipAudioScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ClipAudioScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ClipAudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipAudioScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ClipAudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipAudioScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ClipAudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  audioUrl?: StringWithAggregatesFilter | undefined;
}
