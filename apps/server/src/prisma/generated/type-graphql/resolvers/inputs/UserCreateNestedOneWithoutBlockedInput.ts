import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBlockedInput } from "../inputs/UserCreateOrConnectWithoutBlockedInput";
import { UserCreateWithoutBlockedInput } from "../inputs/UserCreateWithoutBlockedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBlockedInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBlockedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBlockedInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBlockedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlockedInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBlockedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
