import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBlockedByInput } from "../inputs/UserCreateWithoutBlockedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBlockedByInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBlockedByInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBlockedByInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBlockedByInput;
}
