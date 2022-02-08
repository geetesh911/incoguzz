import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutSettingsInput } from "../inputs/UserUpdateOneWithoutSettingsInput";

@TypeGraphQL.InputType("SettingsUpdateInput", {
  isAbstract: true,
})
export class SettingsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutSettingsInput, {
    nullable: true,
  })
  user?: UserUpdateOneWithoutSettingsInput | undefined;
}
