import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsCreateWithoutUserInput } from "../inputs/SettingsCreateWithoutUserInput";
import { SettingsWhereUniqueInput } from "../inputs/SettingsWhereUniqueInput";

@TypeGraphQL.InputType("SettingsCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class SettingsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SettingsWhereUniqueInput, {
    nullable: false,
  })
  where!: SettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingsCreateWithoutUserInput, {
    nullable: false,
  })
  create!: SettingsCreateWithoutUserInput;
}
