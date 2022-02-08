import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedMessagesInput } from "../inputs/UserCreateOrConnectWithoutReceivedMessagesInput";
import { UserCreateWithoutReceivedMessagesInput } from "../inputs/UserCreateWithoutReceivedMessagesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReceivedMessagesInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedMessagesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReceivedMessagesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
