import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBlockedInput } from "../inputs/UserCreateOrConnectWithoutBlockedInput";
import { UserCreateWithoutBlockedInput } from "../inputs/UserCreateWithoutBlockedInput";
import { UserUpdateWithoutBlockedInput } from "../inputs/UserUpdateWithoutBlockedInput";
import { UserUpsertWithoutBlockedInput } from "../inputs/UserUpsertWithoutBlockedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBlockedInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutBlockedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBlockedInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBlockedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlockedInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBlockedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBlockedInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutBlockedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBlockedInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutBlockedInput | undefined;
}
