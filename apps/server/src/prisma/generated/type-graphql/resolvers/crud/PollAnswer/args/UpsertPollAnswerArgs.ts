import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerCreateInput } from "../../../inputs/PollAnswerCreateInput";
import { PollAnswerUpdateInput } from "../../../inputs/PollAnswerUpdateInput";
import { PollAnswerWhereUniqueInput } from "../../../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPollAnswerArgs {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerCreateInput, {
    nullable: false,
  })
  create!: PollAnswerCreateInput;

  @TypeGraphQL.Field(_type => PollAnswerUpdateInput, {
    nullable: false,
  })
  update!: PollAnswerUpdateInput;
}
