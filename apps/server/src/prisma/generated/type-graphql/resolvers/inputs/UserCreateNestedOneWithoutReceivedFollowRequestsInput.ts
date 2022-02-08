import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedFollowRequestsInput } from "../inputs/UserCreateOrConnectWithoutReceivedFollowRequestsInput";
import { UserCreateWithoutReceivedFollowRequestsInput } from "../inputs/UserCreateWithoutReceivedFollowRequestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType(
  "UserCreateNestedOneWithoutReceivedFollowRequestsInput",
  {
    isAbstract: true,
  },
)
export class UserCreateNestedOneWithoutReceivedFollowRequestsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedFollowRequestsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutReceivedFollowRequestsInput | undefined;

  @TypeGraphQL.Field(
    _type => UserCreateOrConnectWithoutReceivedFollowRequestsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | UserCreateOrConnectWithoutReceivedFollowRequestsInput
    | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
