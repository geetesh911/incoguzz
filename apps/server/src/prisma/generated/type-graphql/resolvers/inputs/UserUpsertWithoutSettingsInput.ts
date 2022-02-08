import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSettingsInput } from "../inputs/UserCreateWithoutSettingsInput";
import { UserUpdateWithoutSettingsInput } from "../inputs/UserUpdateWithoutSettingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSettingsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutSettingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSettingsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutSettingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSettingsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutSettingsInput;
}
