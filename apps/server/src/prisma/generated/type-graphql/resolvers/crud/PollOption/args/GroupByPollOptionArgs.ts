import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionOrderByWithAggregationInput } from "../../../inputs/PollOptionOrderByWithAggregationInput";
import { PollOptionScalarWhereWithAggregatesInput } from "../../../inputs/PollOptionScalarWhereWithAggregatesInput";
import { PollOptionWhereInput } from "../../../inputs/PollOptionWhereInput";
import { PollOptionScalarFieldEnum } from "../../../../enums/PollOptionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  where?: PollOptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollOptionOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PollOptionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "option" | "pollId">;

  @TypeGraphQL.Field(_type => PollOptionScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PollOptionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
