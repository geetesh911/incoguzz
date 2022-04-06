import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserUpdateWithoutBookmarksInput } from "../inputs/UserUpdateWithoutBookmarksInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookmarksInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBookmarksInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutBookmarksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBookmarksInput;
}
