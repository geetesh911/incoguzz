import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPollAnswersInput } from "../inputs/UserCreateWithoutPollAnswersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPollAnswersInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPollAnswersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutPollAnswersInput;
}
