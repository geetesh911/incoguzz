import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateNestedOneWithoutPollAnswersInput } from "../inputs/PollCreateNestedOneWithoutPollAnswersInput";
import { UserCreateNestedOneWithoutPollAnswersInput } from "../inputs/UserCreateNestedOneWithoutPollAnswersInput";

@TypeGraphQL.InputType("PollAnswerCreateWithoutPollOptionInput", {
  isAbstract: true,
})
export class PollAnswerCreateWithoutPollOptionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPollAnswersInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutPollAnswersInput;

  @TypeGraphQL.Field(_type => PollCreateNestedOneWithoutPollAnswersInput, {
    nullable: false,
  })
  poll!: PollCreateNestedOneWithoutPollAnswersInput;
}
