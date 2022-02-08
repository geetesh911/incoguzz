import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerUpdateInput } from "../../../inputs/PollAnswerUpdateInput";
import { PollAnswerWhereUniqueInput } from "../../../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePollAnswerArgs {
  @TypeGraphQL.Field(_type => PollAnswerUpdateInput, {
    nullable: false,
  })
  data!: PollAnswerUpdateInput;

  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;
}
