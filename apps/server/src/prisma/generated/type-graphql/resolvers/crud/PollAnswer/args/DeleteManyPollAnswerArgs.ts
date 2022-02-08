import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerWhereInput } from "../../../inputs/PollAnswerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPollAnswerArgs {
  @TypeGraphQL.Field(_type => PollAnswerWhereInput, {
    nullable: true,
  })
  where?: PollAnswerWhereInput | undefined;
}
