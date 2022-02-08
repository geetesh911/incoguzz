import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsCreateWithoutUserInput } from "../inputs/SettingsCreateWithoutUserInput";
import { SettingsUpdateWithoutUserInput } from "../inputs/SettingsUpdateWithoutUserInput";

@TypeGraphQL.InputType("SettingsUpsertWithoutUserInput", {
  isAbstract: true,
})
export class SettingsUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => SettingsUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: SettingsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SettingsCreateWithoutUserInput, {
    nullable: false,
  })
  create!: SettingsCreateWithoutUserInput;
}
