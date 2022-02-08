import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowingsInput } from "../inputs/UserCreateWithoutFollowingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFollowingsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutFollowingsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutFollowingsInput;
}
