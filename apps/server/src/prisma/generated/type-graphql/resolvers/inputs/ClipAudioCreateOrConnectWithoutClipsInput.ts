import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCreateWithoutClipsInput } from "../inputs/ClipAudioCreateWithoutClipsInput";
import { ClipAudioWhereUniqueInput } from "../inputs/ClipAudioWhereUniqueInput";

@TypeGraphQL.InputType("ClipAudioCreateOrConnectWithoutClipsInput", {
  isAbstract: true,
})
export class ClipAudioCreateOrConnectWithoutClipsInput {
  @TypeGraphQL.Field(_type => ClipAudioWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipAudioWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClipAudioCreateWithoutClipsInput, {
    nullable: false,
  })
  create!: ClipAudioCreateWithoutClipsInput;
}
