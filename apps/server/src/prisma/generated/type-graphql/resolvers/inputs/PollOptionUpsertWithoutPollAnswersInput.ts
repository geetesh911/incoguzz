import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateWithoutPollAnswersInput } from "../inputs/PollOptionCreateWithoutPollAnswersInput";
import { PollOptionUpdateWithoutPollAnswersInput } from "../inputs/PollOptionUpdateWithoutPollAnswersInput";

@TypeGraphQL.InputType("PollOptionUpsertWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollOptionUpsertWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => PollOptionUpdateWithoutPollAnswersInput, {
    nullable: false,
  })
  update!: PollOptionUpdateWithoutPollAnswersInput;

  @TypeGraphQL.Field(_type => PollOptionCreateWithoutPollAnswersInput, {
    nullable: false,
  })
  create!: PollOptionCreateWithoutPollAnswersInput;
}
