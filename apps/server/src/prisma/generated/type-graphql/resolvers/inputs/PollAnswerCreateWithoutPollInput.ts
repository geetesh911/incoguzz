import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateNestedOneWithoutPollAnswersInput } from "../inputs/PollOptionCreateNestedOneWithoutPollAnswersInput";
import { UserCreateNestedOneWithoutPollAnswersInput } from "../inputs/UserCreateNestedOneWithoutPollAnswersInput";

@TypeGraphQL.InputType("PollAnswerCreateWithoutPollInput", {
  isAbstract: true,
})
export class PollAnswerCreateWithoutPollInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPollAnswersInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutPollAnswersInput;

  @TypeGraphQL.Field(
    _type => PollOptionCreateNestedOneWithoutPollAnswersInput,
    {
      nullable: false,
    },
  )
  pollOption!: PollOptionCreateNestedOneWithoutPollAnswersInput;
}
