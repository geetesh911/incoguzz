import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCreateOrConnectWithoutClipsInput } from "../inputs/ClipAudioCreateOrConnectWithoutClipsInput";
import { ClipAudioCreateWithoutClipsInput } from "../inputs/ClipAudioCreateWithoutClipsInput";
import { ClipAudioUpdateWithoutClipsInput } from "../inputs/ClipAudioUpdateWithoutClipsInput";
import { ClipAudioUpsertWithoutClipsInput } from "../inputs/ClipAudioUpsertWithoutClipsInput";
import { ClipAudioWhereUniqueInput } from "../inputs/ClipAudioWhereUniqueInput";

@TypeGraphQL.InputType("ClipAudioUpdateOneRequiredWithoutClipsInput", {
  isAbstract: true,
})
export class ClipAudioUpdateOneRequiredWithoutClipsInput {
  @TypeGraphQL.Field(_type => ClipAudioCreateWithoutClipsInput, {
    nullable: true,
  })
  create?: ClipAudioCreateWithoutClipsInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioCreateOrConnectWithoutClipsInput, {
    nullable: true,
  })
  connectOrCreate?: ClipAudioCreateOrConnectWithoutClipsInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioUpsertWithoutClipsInput, {
    nullable: true,
  })
  upsert?: ClipAudioUpsertWithoutClipsInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioWhereUniqueInput, {
    nullable: true,
  })
  connect?: ClipAudioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioUpdateWithoutClipsInput, {
    nullable: true,
  })
  update?: ClipAudioUpdateWithoutClipsInput | undefined;
}
