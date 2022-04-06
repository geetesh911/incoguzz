import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionsInput } from "../inputs/UserCreateWithoutReactionsInput";
import { UserUpdateWithoutReactionsInput } from "../inputs/UserUpdateWithoutReactionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutReactionsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutReactionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutReactionsInput;
}
