import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBlockedByInput } from "../inputs/UserCreateWithoutBlockedByInput";
import { UserUpdateWithoutBlockedByInput } from "../inputs/UserUpdateWithoutBlockedByInput";

@TypeGraphQL.InputType("UserUpsertWithoutBlockedByInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBlockedByInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBlockedByInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutBlockedByInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBlockedByInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBlockedByInput;
}
