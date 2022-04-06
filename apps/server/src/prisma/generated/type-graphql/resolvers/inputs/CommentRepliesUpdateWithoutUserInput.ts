import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateOneRequiredWithoutCommentRepliesInput } from "../inputs/CommentUpdateOneRequiredWithoutCommentRepliesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CommentRepliesUpdateWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  comment?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    _type => CommentUpdateOneRequiredWithoutCommentRepliesInput,
    {
      nullable: true,
    },
  )
  repliedTo?: CommentUpdateOneRequiredWithoutCommentRepliesInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
