import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateNestedManyWithoutPollOptionInput } from "../inputs/PollAnswerCreateNestedManyWithoutPollOptionInput";
import { PollCreateNestedOneWithoutPollOptionsInput } from "../inputs/PollCreateNestedOneWithoutPollOptionsInput";

@TypeGraphQL.InputType("PollOptionCreateInput", {
  isAbstract: true,
})
export class PollOptionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  option!: string;

  @TypeGraphQL.Field(_type => PollCreateNestedOneWithoutPollOptionsInput, {
    nullable: false,
  })
  poll!: PollCreateNestedOneWithoutPollOptionsInput;

  @TypeGraphQL.Field(
    _type => PollAnswerCreateNestedManyWithoutPollOptionInput,
    {
      nullable: true,
    },
  )
  pollAnswers?: PollAnswerCreateNestedManyWithoutPollOptionInput | undefined;
}
