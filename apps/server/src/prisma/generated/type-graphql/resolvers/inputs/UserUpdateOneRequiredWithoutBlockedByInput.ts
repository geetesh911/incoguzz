import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBlockedByInput } from "../inputs/UserCreateOrConnectWithoutBlockedByInput";
import { UserCreateWithoutBlockedByInput } from "../inputs/UserCreateWithoutBlockedByInput";
import { UserUpdateWithoutBlockedByInput } from "../inputs/UserUpdateWithoutBlockedByInput";
import { UserUpsertWithoutBlockedByInput } from "../inputs/UserUpsertWithoutBlockedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBlockedByInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutBlockedByInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBlockedByInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBlockedByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlockedByInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBlockedByInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutBlockedByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBlockedByInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutBlockedByInput | undefined;
}
