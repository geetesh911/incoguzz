import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOrderByWithAggregationInput } from "../../../inputs/PollOrderByWithAggregationInput";
import { PollScalarWhereWithAggregatesInput } from "../../../inputs/PollScalarWhereWithAggregatesInput";
import { PollWhereInput } from "../../../inputs/PollWhereInput";
import { PollScalarFieldEnum } from "../../../../enums/PollScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPollArgs {
  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true,
  })
  where?: PollWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PollOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "question" | "postId">;

  @TypeGraphQL.Field(_type => PollScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PollScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
