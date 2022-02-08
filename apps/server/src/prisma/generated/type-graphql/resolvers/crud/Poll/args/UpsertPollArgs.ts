import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollCreateInput } from "../../../inputs/PollCreateInput";
import { PollUpdateInput } from "../../../inputs/PollUpdateInput";
import { PollWhereUniqueInput } from "../../../inputs/PollWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPollArgs {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollCreateInput, {
    nullable: false,
  })
  create!: PollCreateInput;

  @TypeGraphQL.Field(_type => PollUpdateInput, {
    nullable: false,
  })
  update!: PollUpdateInput;
}
