import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ClipScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ClipScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ClipScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ClipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ClipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ClipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  thumbnailUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  clipAudioId?: StringWithAggregatesFilter | undefined;
}
