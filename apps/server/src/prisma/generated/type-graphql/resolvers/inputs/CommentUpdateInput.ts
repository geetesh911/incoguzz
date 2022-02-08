import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesUpdateManyWithoutRepliedToInput } from "../inputs/CommentRepliesUpdateManyWithoutRepliedToInput";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType("CommentUpdateInput", {
  isAbstract: true,
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  comment?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateManyWithoutRepliedToInput, {
    nullable: true,
  })
  commentReplies?: CommentRepliesUpdateManyWithoutRepliedToInput | undefined;
}
