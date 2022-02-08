import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollUpdateInput } from "../../../inputs/PollUpdateInput";
import { PollWhereUniqueInput } from "../../../inputs/PollWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePollArgs {
  @TypeGraphQL.Field(_type => PollUpdateInput, {
    nullable: false,
  })
  data!: PollUpdateInput;

  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;
}
