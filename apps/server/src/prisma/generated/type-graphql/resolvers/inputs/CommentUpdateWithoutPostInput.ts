import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesUpdateManyWithoutRepliedToInput } from "../inputs/CommentRepliesUpdateManyWithoutRepliedToInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType("CommentUpdateWithoutPostInput", {
  isAbstract: true,
})
export class CommentUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  comment?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateManyWithoutRepliedToInput, {
    nullable: true,
  })
  commentReplies?: CommentRepliesUpdateManyWithoutRepliedToInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
