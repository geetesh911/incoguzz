import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerCreateInput } from "../../../inputs/PollAnswerCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePollAnswerArgs {
  @TypeGraphQL.Field(_type => PollAnswerCreateInput, {
    nullable: false,
  })
  data!: PollAnswerCreateInput;
}
