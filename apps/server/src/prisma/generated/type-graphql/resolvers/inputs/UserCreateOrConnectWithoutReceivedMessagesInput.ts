import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedMessagesInput } from "../inputs/UserCreateWithoutReceivedMessagesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutReceivedMessagesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedMessagesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutReceivedMessagesInput;
}
