import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCreateOrConnectWithoutClipsInput } from "../inputs/ClipAudioCreateOrConnectWithoutClipsInput";
import { ClipAudioCreateWithoutClipsInput } from "../inputs/ClipAudioCreateWithoutClipsInput";
import { ClipAudioWhereUniqueInput } from "../inputs/ClipAudioWhereUniqueInput";

@TypeGraphQL.InputType("ClipAudioCreateNestedOneWithoutClipsInput", {
  isAbstract: true,
})
export class ClipAudioCreateNestedOneWithoutClipsInput {
  @TypeGraphQL.Field(_type => ClipAudioCreateWithoutClipsInput, {
    nullable: true,
  })
  create?: ClipAudioCreateWithoutClipsInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioCreateOrConnectWithoutClipsInput, {
    nullable: true,
  })
  connectOrCreate?: ClipAudioCreateOrConnectWithoutClipsInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioWhereUniqueInput, {
    nullable: true,
  })
  connect?: ClipAudioWhereUniqueInput | undefined;
}
