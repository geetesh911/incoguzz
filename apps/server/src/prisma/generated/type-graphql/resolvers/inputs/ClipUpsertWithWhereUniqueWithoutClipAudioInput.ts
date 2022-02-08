import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateWithoutClipAudioInput } from "../inputs/ClipCreateWithoutClipAudioInput";
import { ClipUpdateWithoutClipAudioInput } from "../inputs/ClipUpdateWithoutClipAudioInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipUpsertWithWhereUniqueWithoutClipAudioInput", {
  isAbstract: true,
})
export class ClipUpsertWithWhereUniqueWithoutClipAudioInput {
  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClipUpdateWithoutClipAudioInput, {
    nullable: false,
  })
  update!: ClipUpdateWithoutClipAudioInput;

  @TypeGraphQL.Field(_type => ClipCreateWithoutClipAudioInput, {
    nullable: false,
  })
  create!: ClipCreateWithoutClipAudioInput;
}
