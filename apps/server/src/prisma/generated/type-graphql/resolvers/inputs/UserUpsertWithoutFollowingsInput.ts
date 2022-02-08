import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowingsInput } from "../inputs/UserCreateWithoutFollowingsInput";
import { UserUpdateWithoutFollowingsInput } from "../inputs/UserUpdateWithoutFollowingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFollowingsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutFollowingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowingsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutFollowingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutFollowingsInput;
}
