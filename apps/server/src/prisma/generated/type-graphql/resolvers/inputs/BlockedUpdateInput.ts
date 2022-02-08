import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBlockedByInput } from "../inputs/UserUpdateOneRequiredWithoutBlockedByInput";
import { UserUpdateOneRequiredWithoutBlockedInput } from "../inputs/UserUpdateOneRequiredWithoutBlockedInput";

@TypeGraphQL.InputType("BlockedUpdateInput", {
  isAbstract: true,
})
export class BlockedUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBlockedByInput, {
    nullable: true,
  })
  sourceUser?: UserUpdateOneRequiredWithoutBlockedByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBlockedInput, {
    nullable: true,
  })
  targetUser?: UserUpdateOneRequiredWithoutBlockedInput | undefined;
}
