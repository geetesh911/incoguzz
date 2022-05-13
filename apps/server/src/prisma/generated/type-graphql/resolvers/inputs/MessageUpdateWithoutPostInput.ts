import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMessageMediaTypeFieldUpdateOperationsInput } from "../inputs/EnumMessageMediaTypeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutReplyToInput } from "../inputs/MessageUpdateManyWithoutReplyToInput";
import { MessageUpdateOneWithoutReplyToMessageInput } from "../inputs/MessageUpdateOneWithoutReplyToMessageInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StoryUpdateOneWithoutMessageInput } from "../inputs/StoryUpdateOneWithoutMessageInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReceivedMessagesInput } from "../inputs/UserUpdateOneRequiredWithoutReceivedMessagesInput";
import { UserUpdateOneRequiredWithoutSentMessagesInput } from "../inputs/UserUpdateOneRequiredWithoutSentMessagesInput";

@TypeGraphQL.InputType("MessageUpdateWithoutPostInput", {
  isAbstract: true,
})
export class MessageUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  mediaUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  mediaThumbnailUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StoryUpdateOneWithoutMessageInput, {
    nullable: true,
  })
  story?: StoryUpdateOneWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSentMessagesInput, {
    nullable: true,
  })
  sourceUser?: UserUpdateOneRequiredWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(
    _type => UserUpdateOneRequiredWithoutReceivedMessagesInput,
    {
      nullable: true,
    },
  )
  targetUser?: UserUpdateOneRequiredWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateOneWithoutReplyToMessageInput, {
    nullable: true,
  })
  replyTo?: MessageUpdateOneWithoutReplyToMessageInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutReplyToInput, {
    nullable: true,
  })
  replyToMessage?: MessageUpdateManyWithoutReplyToInput | undefined;

  @TypeGraphQL.Field(_type => EnumMessageMediaTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  mediaType?: EnumMessageMediaTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
