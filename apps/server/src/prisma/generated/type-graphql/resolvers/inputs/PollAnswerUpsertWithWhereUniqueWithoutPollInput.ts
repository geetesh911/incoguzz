import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateWithoutPollInput } from "../inputs/PollAnswerCreateWithoutPollInput";
import { PollAnswerUpdateWithoutPollInput } from "../inputs/PollAnswerUpdateWithoutPollInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerUpsertWithWhereUniqueWithoutPollInput", {
  isAbstract: true,
})
export class PollAnswerUpsertWithWhereUniqueWithoutPollInput {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerUpdateWithoutPollInput, {
    nullable: false,
  })
  update!: PollAnswerUpdateWithoutPollInput;

  @TypeGraphQL.Field(_type => PollAnswerCreateWithoutPollInput, {
    nullable: false,
  })
  create!: PollAnswerCreateWithoutPollInput;
}
