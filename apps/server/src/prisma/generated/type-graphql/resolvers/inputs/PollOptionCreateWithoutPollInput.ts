import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateNestedManyWithoutPollOptionInput } from "../inputs/PollAnswerCreateNestedManyWithoutPollOptionInput";

@TypeGraphQL.InputType("PollOptionCreateWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionCreateWithoutPollInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  option!: string;

  @TypeGraphQL.Field(
    _type => PollAnswerCreateNestedManyWithoutPollOptionInput,
    {
      nullable: true,
    },
  )
  pollAnswers?: PollAnswerCreateNestedManyWithoutPollOptionInput | undefined;
}
