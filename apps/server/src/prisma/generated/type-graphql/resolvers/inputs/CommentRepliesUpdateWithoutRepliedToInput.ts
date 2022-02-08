import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentRepliesInput } from "../inputs/UserUpdateOneRequiredWithoutCommentRepliesInput";

@TypeGraphQL.InputType("CommentRepliesUpdateWithoutRepliedToInput", {
  isAbstract: true,
})
export class CommentRepliesUpdateWithoutRepliedToInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  comment?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentRepliesInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutCommentRepliesInput | undefined;
}
