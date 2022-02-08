import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedFollowRequestsInput } from "../inputs/UserCreateOrConnectWithoutReceivedFollowRequestsInput";
import { UserCreateWithoutReceivedFollowRequestsInput } from "../inputs/UserCreateWithoutReceivedFollowRequestsInput";
import { UserUpdateWithoutReceivedFollowRequestsInput } from "../inputs/UserUpdateWithoutReceivedFollowRequestsInput";
import { UserUpsertWithoutReceivedFollowRequestsInput } from "../inputs/UserUpsertWithoutReceivedFollowRequestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType(
  "UserUpdateOneRequiredWithoutReceivedFollowRequestsInput",
  {
    isAbstract: true,
  },
)
export class UserUpdateOneRequiredWithoutReceivedFollowRequestsInput {
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

  @TypeGraphQL.Field(_type => UserUpsertWithoutReceivedFollowRequestsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutReceivedFollowRequestsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedFollowRequestsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutReceivedFollowRequestsInput | undefined;
}
