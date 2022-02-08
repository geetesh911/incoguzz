import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedMessagesInput } from "../inputs/UserCreateWithoutReceivedMessagesInput";
import { UserUpdateWithoutReceivedMessagesInput } from "../inputs/UserUpdateWithoutReceivedMessagesInput";

@TypeGraphQL.InputType("UserUpsertWithoutReceivedMessagesInput", {
  isAbstract: true,
})
export class UserUpsertWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedMessagesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutReceivedMessagesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedMessagesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutReceivedMessagesInput;
}
