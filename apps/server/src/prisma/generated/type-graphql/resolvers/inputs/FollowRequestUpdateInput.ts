import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReceivedFollowRequestsInput } from "../inputs/UserUpdateOneRequiredWithoutReceivedFollowRequestsInput";
import { UserUpdateOneRequiredWithoutSentFollowRequestsInput } from "../inputs/UserUpdateOneRequiredWithoutSentFollowRequestsInput";

@TypeGraphQL.InputType("FollowRequestUpdateInput", {
  isAbstract: true,
})
export class FollowRequestUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    _type => UserUpdateOneRequiredWithoutSentFollowRequestsInput,
    {
      nullable: true,
    },
  )
  sourceUser?: UserUpdateOneRequiredWithoutSentFollowRequestsInput | undefined;

  @TypeGraphQL.Field(
    _type => UserUpdateOneRequiredWithoutReceivedFollowRequestsInput,
    {
      nullable: true,
    },
  )
  targetUser?:
    | UserUpdateOneRequiredWithoutReceivedFollowRequestsInput
    | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
