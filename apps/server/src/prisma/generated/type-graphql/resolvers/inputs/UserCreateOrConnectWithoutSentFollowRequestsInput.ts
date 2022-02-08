import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSentFollowRequestsInput } from "../inputs/UserCreateWithoutSentFollowRequestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSentFollowRequestsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutSentFollowRequestsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSentFollowRequestsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutSentFollowRequestsInput;
}
