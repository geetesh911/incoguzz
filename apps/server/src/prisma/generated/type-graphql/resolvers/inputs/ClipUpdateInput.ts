import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioUpdateOneRequiredWithoutClipsInput } from "../inputs/ClipAudioUpdateOneRequiredWithoutClipsInput";
import { PostUpdateOneRequiredWithoutClipInput } from "../inputs/PostUpdateOneRequiredWithoutClipInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ClipUpdateInput", {
  isAbstract: true,
})
export class ClipUpdateInput {
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

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutClipInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutClipInput | undefined;

  @TypeGraphQL.Field(_type => ClipAudioUpdateOneRequiredWithoutClipsInput, {
    nullable: true,
  })
  clipAudio?: ClipAudioUpdateOneRequiredWithoutClipsInput | undefined;
}
