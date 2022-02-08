import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioUpdateOneRequiredWithoutClipsInput } from "../inputs/ClipAudioUpdateOneRequiredWithoutClipsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ClipUpdateWithoutPostInput", {
  isAbstract: true,
})
export class ClipUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  thumbnailUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioUpdateOneRequiredWithoutClipsInput, {
    nullable: true,
  })
  clipAudio?: ClipAudioUpdateOneRequiredWithoutClipsInput | undefined;
}
