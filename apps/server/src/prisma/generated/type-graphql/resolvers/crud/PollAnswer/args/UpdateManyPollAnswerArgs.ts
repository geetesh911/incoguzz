import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerUpdateManyMutationInput } from "../../../inputs/PollAnswerUpdateManyMutationInput";
import { PollAnswerWhereInput } from "../../../inputs/PollAnswerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPollAnswerArgs {
  @TypeGraphQL.Field(_type => PollAnswerUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PollAnswerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PollAnswerWhereInput, {
    nullable: true,
  })
  where?: PollAnswerWhereInput | undefined;
}
