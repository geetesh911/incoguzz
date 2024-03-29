import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSentFollowRequestsInput } from "../inputs/UserCreateOrConnectWithoutSentFollowRequestsInput";
import { UserCreateWithoutSentFollowRequestsInput } from "../inputs/UserCreateWithoutSentFollowRequestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSentFollowRequestsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutSentFollowRequestsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSentFollowRequestsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutSentFollowRequestsInput | undefined;

  @TypeGraphQL.Field(
    _type => UserCreateOrConnectWithoutSentFollowRequestsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | UserCreateOrConnectWithoutSentFollowRequestsInput
    | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
