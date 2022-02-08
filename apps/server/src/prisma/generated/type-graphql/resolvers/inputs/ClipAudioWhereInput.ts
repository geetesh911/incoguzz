import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipListRelationFilter } from "../inputs/ClipListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ClipAudioWhereInput", {
  isAbstract: true,
})
export class ClipAudioWhereInput {
  @TypeGraphQL.Field(_type => [ClipAudioWhereInput], {
    nullable: true,
  })
  AND?: ClipAudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipAudioWhereInput], {
    nullable: true,
  })
  OR?: ClipAudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipAudioWhereInput], {
    nullable: true,
  })
  NOT?: ClipAudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  audioUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ClipListRelationFilter, {
    nullable: true,
  })
  clips?: ClipListRelationFilter | undefined;
}
