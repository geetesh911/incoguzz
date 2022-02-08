import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSettingsInput } from "../inputs/UserCreateOrConnectWithoutSettingsInput";
import { UserCreateWithoutSettingsInput } from "../inputs/UserCreateWithoutSettingsInput";
import { UserUpdateWithoutSettingsInput } from "../inputs/UserUpdateWithoutSettingsInput";
import { UserUpsertWithoutSettingsInput } from "../inputs/UserUpsertWithoutSettingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutSettingsInput", {
  isAbstract: true,
})
export class UserUpdateOneWithoutSettingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSettingsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSettingsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSettingsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSettingsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutSettingsInput | undefined;
}
