import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSettingsInput } from "../inputs/UserCreateNestedOneWithoutSettingsInput";

@TypeGraphQL.InputType("SettingsCreateInput", {
  isAbstract: true,
})
export class SettingsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSettingsInput, {
    nullable: true,
  })
  user?: UserCreateNestedOneWithoutSettingsInput | undefined;
}
