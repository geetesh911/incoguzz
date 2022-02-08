import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionCreateInput } from "../../../inputs/PollOptionCreateInput";
import { PollOptionUpdateInput } from "../../../inputs/PollOptionUpdateInput";
import { PollOptionWhereUniqueInput } from "../../../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: false,
  })
  where!: PollOptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollOptionCreateInput, {
    nullable: false,
  })
  create!: PollOptionCreateInput;

  @TypeGraphQL.Field(_type => PollOptionUpdateInput, {
    nullable: false,
  })
  update!: PollOptionUpdateInput;
}
