import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCreateWithoutClipsInput } from "../inputs/ClipAudioCreateWithoutClipsInput";
import { ClipAudioUpdateWithoutClipsInput } from "../inputs/ClipAudioUpdateWithoutClipsInput";

@TypeGraphQL.InputType("ClipAudioUpsertWithoutClipsInput", {
  isAbstract: true,
})
export class ClipAudioUpsertWithoutClipsInput {
  @TypeGraphQL.Field(_type => ClipAudioUpdateWithoutClipsInput, {
    nullable: false,
  })
  update!: ClipAudioUpdateWithoutClipsInput;

  @TypeGraphQL.Field(_type => ClipAudioCreateWithoutClipsInput, {
    nullable: false,
  })
  create!: ClipAudioCreateWithoutClipsInput;
}
