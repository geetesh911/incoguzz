import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowingsInput } from "../inputs/UserCreateOrConnectWithoutFollowingsInput";
import { UserCreateWithoutFollowingsInput } from "../inputs/UserCreateWithoutFollowingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFollowingsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutFollowingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutFollowingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowingsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
