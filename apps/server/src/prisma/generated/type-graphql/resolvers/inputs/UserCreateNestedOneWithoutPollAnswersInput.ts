import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPollAnswersInput } from "../inputs/UserCreateOrConnectWithoutPollAnswersInput";
import { UserCreateWithoutPollAnswersInput } from "../inputs/UserCreateWithoutPollAnswersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPollAnswersInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPollAnswersInput, {
    nullable: true,
  })
  create?: UserCreateWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPollAnswersInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
