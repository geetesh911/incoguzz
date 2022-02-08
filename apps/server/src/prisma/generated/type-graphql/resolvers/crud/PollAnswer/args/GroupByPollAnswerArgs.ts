import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerOrderByWithAggregationInput } from "../../../inputs/PollAnswerOrderByWithAggregationInput";
import { PollAnswerScalarWhereWithAggregatesInput } from "../../../inputs/PollAnswerScalarWhereWithAggregatesInput";
import { PollAnswerWhereInput } from "../../../inputs/PollAnswerWhereInput";
import { PollAnswerScalarFieldEnum } from "../../../../enums/PollAnswerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPollAnswerArgs {
  @TypeGraphQL.Field(_type => PollAnswerWhereInput, {
    nullable: true,
  })
  where?: PollAnswerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PollAnswerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "userId" | "pollId" | "pollOptionId">;

  @TypeGraphQL.Field(_type => PollAnswerScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PollAnswerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
