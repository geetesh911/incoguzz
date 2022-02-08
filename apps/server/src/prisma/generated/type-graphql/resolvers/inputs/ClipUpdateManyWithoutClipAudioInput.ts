import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateManyClipAudioInputEnvelope } from "../inputs/ClipCreateManyClipAudioInputEnvelope";
import { ClipCreateOrConnectWithoutClipAudioInput } from "../inputs/ClipCreateOrConnectWithoutClipAudioInput";
import { ClipCreateWithoutClipAudioInput } from "../inputs/ClipCreateWithoutClipAudioInput";
import { ClipScalarWhereInput } from "../inputs/ClipScalarWhereInput";
import { ClipUpdateManyWithWhereWithoutClipAudioInput } from "../inputs/ClipUpdateManyWithWhereWithoutClipAudioInput";
import { ClipUpdateWithWhereUniqueWithoutClipAudioInput } from "../inputs/ClipUpdateWithWhereUniqueWithoutClipAudioInput";
import { ClipUpsertWithWhereUniqueWithoutClipAudioInput } from "../inputs/ClipUpsertWithWhereUniqueWithoutClipAudioInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipUpdateManyWithoutClipAudioInput", {
  isAbstract: true,
})
export class ClipUpdateManyWithoutClipAudioInput {
  @TypeGraphQL.Field(_type => [ClipCreateWithoutClipAudioInput], {
    nullable: true,
  })
  create?: ClipCreateWithoutClipAudioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipCreateOrConnectWithoutClipAudioInput], {
    nullable: true,
  })
  connectOrCreate?: ClipCreateOrConnectWithoutClipAudioInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [ClipUpsertWithWhereUniqueWithoutClipAudioInput],
    {
      nullable: true,
    },
  )
  upsert?: ClipUpsertWithWhereUniqueWithoutClipAudioInput[] | undefined;

  @TypeGraphQL.Field(_type => ClipCreateManyClipAudioInputEnvelope, {
    nullable: true,
  })
  createMany?: ClipCreateManyClipAudioInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClipWhereUniqueInput], {
    nullable: true,
  })
  set?: ClipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ClipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipWhereUniqueInput], {
    nullable: true,
  })
  delete?: ClipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipWhereUniqueInput], {
    nullable: true,
  })
  connect?: ClipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [ClipUpdateWithWhereUniqueWithoutClipAudioInput],
    {
      nullable: true,
    },
  )
  update?: ClipUpdateWithWhereUniqueWithoutClipAudioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipUpdateManyWithWhereWithoutClipAudioInput], {
    nullable: true,
  })
  updateMany?: ClipUpdateManyWithWhereWithoutClipAudioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ClipScalarWhereInput[] | undefined;
}
