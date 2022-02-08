import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowingsInput } from "../inputs/UserCreateOrConnectWithoutFollowingsInput";
import { UserCreateWithoutFollowingsInput } from "../inputs/UserCreateWithoutFollowingsInput";
import { UserUpdateWithoutFollowingsInput } from "../inputs/UserUpdateWithoutFollowingsInput";
import { UserUpsertWithoutFollowingsInput } from "../inputs/UserUpsertWithoutFollowingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFollowingsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutFollowingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutFollowingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowingsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFollowingsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutFollowingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowingsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutFollowingsInput | undefined;
}
