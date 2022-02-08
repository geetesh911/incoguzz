import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutPollAnswersInput } from "../inputs/PollCreateWithoutPollAnswersInput";
import { PollUpdateWithoutPollAnswersInput } from "../inputs/PollUpdateWithoutPollAnswersInput";

@TypeGraphQL.InputType("PollUpsertWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollUpsertWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => PollUpdateWithoutPollAnswersInput, {
    nullable: false,
  })
  update!: PollUpdateWithoutPollAnswersInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutPollAnswersInput, {
    nullable: false,
  })
  create!: PollCreateWithoutPollAnswersInput;
}
