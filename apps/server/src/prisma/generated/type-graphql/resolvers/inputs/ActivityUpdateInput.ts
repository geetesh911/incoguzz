import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumActivityTypeFieldUpdateOperationsInput } from "../inputs/EnumActivityTypeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutActivitiesInput } from "../inputs/PostUpdateOneRequiredWithoutActivitiesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActivitiesInput } from "../inputs/UserUpdateOneRequiredWithoutActivitiesInput";

@TypeGraphQL.InputType("ActivityUpdateInput", {
  isAbstract: true,
})
export class ActivityUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumActivityTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  type?: EnumActivityTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActivitiesInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutActivitiesInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
