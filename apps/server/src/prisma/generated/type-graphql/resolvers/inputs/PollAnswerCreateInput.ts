import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateNestedOneWithoutPollAnswersInput } from "../inputs/PollCreateNestedOneWithoutPollAnswersInput";
import { PollOptionCreateNestedOneWithoutPollAnswersInput } from "../inputs/PollOptionCreateNestedOneWithoutPollAnswersInput";
import { UserCreateNestedOneWithoutPollAnswersInput } from "../inputs/UserCreateNestedOneWithoutPollAnswersInput";

@TypeGraphQL.InputType("PollAnswerCreateInput", {
  isAbstract: true,
})
export class PollAnswerCreateInput {
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

  @TypeGraphQL.Field(
    _type => PollOptionCreateNestedOneWithoutPollAnswersInput,
    {
      nullable: false,
    },
  )
  pollOption!: PollOptionCreateNestedOneWithoutPollAnswersInput;
}
