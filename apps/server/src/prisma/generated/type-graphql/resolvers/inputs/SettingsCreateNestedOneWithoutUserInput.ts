import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsCreateOrConnectWithoutUserInput } from "../inputs/SettingsCreateOrConnectWithoutUserInput";
import { SettingsCreateWithoutUserInput } from "../inputs/SettingsCreateWithoutUserInput";
import { SettingsWhereUniqueInput } from "../inputs/SettingsWhereUniqueInput";

@TypeGraphQL.InputType("SettingsCreateNestedOneWithoutUserInput", {
  isAbstract: true,
})
export class SettingsCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => SettingsCreateWithoutUserInput, {
    nullable: true,
  })
  create?: SettingsCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SettingsCreateOrConnectWithoutUserInput, {
    nullable: true,
  })
  connectOrCreate?: SettingsCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SettingsWhereUniqueInput, {
    nullable: true,
  })
  connect?: SettingsWhereUniqueInput | undefined;
}
