import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerUpdateWithoutPollOptionInput } from "../inputs/PollAnswerUpdateWithoutPollOptionInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType(
  "PollAnswerUpdateWithWhereUniqueWithoutPollOptionInput",
  {
    isAbstract: true,
  },
)
export class PollAnswerUpdateWithWhereUniqueWithoutPollOptionInput {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerUpdateWithoutPollOptionInput, {
    nullable: false,
  })
  data!: PollAnswerUpdateWithoutPollOptionInput;
}
