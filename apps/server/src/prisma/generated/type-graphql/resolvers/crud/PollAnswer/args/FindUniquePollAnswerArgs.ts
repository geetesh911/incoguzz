import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerWhereUniqueInput } from "../../../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePollAnswerArgs {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;
}
