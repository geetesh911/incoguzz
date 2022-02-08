import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedMessagesInput } from "../inputs/UserCreateOrConnectWithoutReceivedMessagesInput";
import { UserCreateWithoutReceivedMessagesInput } from "../inputs/UserCreateWithoutReceivedMessagesInput";
import { UserUpdateWithoutReceivedMessagesInput } from "../inputs/UserUpdateWithoutReceivedMessagesInput";
import { UserUpsertWithoutReceivedMessagesInput } from "../inputs/UserUpsertWithoutReceivedMessagesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReceivedMessagesInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedMessagesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReceivedMessagesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReceivedMessagesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedMessagesInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutReceivedMessagesInput | undefined;
}
