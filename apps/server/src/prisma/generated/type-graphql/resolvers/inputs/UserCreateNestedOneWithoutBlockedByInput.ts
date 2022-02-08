import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBlockedByInput } from "../inputs/UserCreateOrConnectWithoutBlockedByInput";
import { UserCreateWithoutBlockedByInput } from "../inputs/UserCreateWithoutBlockedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBlockedByInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBlockedByInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBlockedByInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBlockedByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlockedByInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
