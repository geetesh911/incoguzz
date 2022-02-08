import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPollAnswersInput } from "../inputs/UserCreateOrConnectWithoutPollAnswersInput";
import { UserCreateWithoutPollAnswersInput } from "../inputs/UserCreateWithoutPollAnswersInput";
import { UserUpdateWithoutPollAnswersInput } from "../inputs/UserUpdateWithoutPollAnswersInput";
import { UserUpsertWithoutPollAnswersInput } from "../inputs/UserUpsertWithoutPollAnswersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPollAnswersInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPollAnswersInput, {
    nullable: true,
  })
  create?: UserCreateWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPollAnswersInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPollAnswersInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPollAnswersInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutPollAnswersInput | undefined;
}
