import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSettingsInput } from "../inputs/UserCreateOrConnectWithoutSettingsInput";
import { UserCreateWithoutSettingsInput } from "../inputs/UserCreateWithoutSettingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSettingsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutSettingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSettingsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSettingsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
