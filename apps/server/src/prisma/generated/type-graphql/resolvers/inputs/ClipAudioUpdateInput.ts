import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipUpdateManyWithoutClipAudioInput } from "../inputs/ClipUpdateManyWithoutClipAudioInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ClipAudioUpdateInput", {
  isAbstract: true,
})
export class ClipAudioUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  audioUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ClipUpdateManyWithoutClipAudioInput, {
    nullable: true,
  })
  clips?: ClipUpdateManyWithoutClipAudioInput | undefined;
}
