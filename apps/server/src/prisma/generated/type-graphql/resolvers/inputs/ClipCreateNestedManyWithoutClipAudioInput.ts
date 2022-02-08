import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateManyClipAudioInputEnvelope } from "../inputs/ClipCreateManyClipAudioInputEnvelope";
import { ClipCreateOrConnectWithoutClipAudioInput } from "../inputs/ClipCreateOrConnectWithoutClipAudioInput";
import { ClipCreateWithoutClipAudioInput } from "../inputs/ClipCreateWithoutClipAudioInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipCreateNestedManyWithoutClipAudioInput", {
  isAbstract: true,
})
export class ClipCreateNestedManyWithoutClipAudioInput {
  @TypeGraphQL.Field(_type => [ClipCreateWithoutClipAudioInput], {
    nullable: true,
  })
  create?: ClipCreateWithoutClipAudioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipCreateOrConnectWithoutClipAudioInput], {
    nullable: true,
  })
  connectOrCreate?: ClipCreateOrConnectWithoutClipAudioInput[] | undefined;

  @TypeGraphQL.Field(_type => ClipCreateManyClipAudioInputEnvelope, {
    nullable: true,
  })
  createMany?: ClipCreateManyClipAudioInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClipWhereUniqueInput], {
    nullable: true,
  })
  connect?: ClipWhereUniqueInput[] | undefined;
}
