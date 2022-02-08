import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioWhereInput } from "../inputs/ClipAudioWhereInput";

@TypeGraphQL.InputType("ClipAudioRelationFilter", {
  isAbstract: true,
})
export class ClipAudioRelationFilter {
  @TypeGraphQL.Field(_type => ClipAudioWhereInput, {
    nullable: true,
  })
  is?: ClipAudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioWhereInput, {
    nullable: true,
  })
  isNot?: ClipAudioWhereInput | undefined;
}
