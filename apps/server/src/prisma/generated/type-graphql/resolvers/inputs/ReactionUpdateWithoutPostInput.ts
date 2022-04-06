import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionTypeFieldUpdateOperationsInput } from "../inputs/EnumReactionTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionsInput";

@TypeGraphQL.InputType("ReactionUpdateWithoutPostInput", {
  isAbstract: true,
})
export class ReactionUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReactionTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  reaction?: EnumReactionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
