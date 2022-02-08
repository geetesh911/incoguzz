import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedFollowRequestsInput } from "../inputs/UserCreateWithoutReceivedFollowRequestsInput";
import { UserUpdateWithoutReceivedFollowRequestsInput } from "../inputs/UserUpdateWithoutReceivedFollowRequestsInput";

@TypeGraphQL.InputType("UserUpsertWithoutReceivedFollowRequestsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutReceivedFollowRequestsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedFollowRequestsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutReceivedFollowRequestsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedFollowRequestsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutReceivedFollowRequestsInput;
}
