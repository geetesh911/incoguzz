import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSentFollowRequestsInput } from "../inputs/UserCreateWithoutSentFollowRequestsInput";
import { UserUpdateWithoutSentFollowRequestsInput } from "../inputs/UserUpdateWithoutSentFollowRequestsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSentFollowRequestsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutSentFollowRequestsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSentFollowRequestsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutSentFollowRequestsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSentFollowRequestsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutSentFollowRequestsInput;
}
