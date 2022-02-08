import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBlockedInput } from "../inputs/UserCreateWithoutBlockedInput";
import { UserUpdateWithoutBlockedInput } from "../inputs/UserUpdateWithoutBlockedInput";

@TypeGraphQL.InputType("UserUpsertWithoutBlockedInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBlockedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBlockedInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutBlockedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBlockedInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBlockedInput;
}
