import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPollAnswersInput } from "../inputs/UserCreateWithoutPollAnswersInput";
import { UserUpdateWithoutPollAnswersInput } from "../inputs/UserUpdateWithoutPollAnswersInput";

@TypeGraphQL.InputType("UserUpsertWithoutPollAnswersInput", {
  isAbstract: true,
})
export class UserUpsertWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPollAnswersInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutPollAnswersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPollAnswersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutPollAnswersInput;
}
