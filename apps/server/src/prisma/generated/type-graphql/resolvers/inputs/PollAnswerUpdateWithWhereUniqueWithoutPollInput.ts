import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerUpdateWithoutPollInput } from "../inputs/PollAnswerUpdateWithoutPollInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerUpdateWithWhereUniqueWithoutPollInput", {
  isAbstract: true,
})
export class PollAnswerUpdateWithWhereUniqueWithoutPollInput {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerUpdateWithoutPollInput, {
    nullable: false,
  })
  data!: PollAnswerUpdateWithoutPollInput;
}
