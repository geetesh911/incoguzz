import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedFollowRequestsInput } from "../inputs/UserCreateWithoutReceivedFollowRequestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType(
  "UserCreateOrConnectWithoutReceivedFollowRequestsInput",
  {
    isAbstract: true,
  },
)
export class UserCreateOrConnectWithoutReceivedFollowRequestsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedFollowRequestsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutReceivedFollowRequestsInput;
}
