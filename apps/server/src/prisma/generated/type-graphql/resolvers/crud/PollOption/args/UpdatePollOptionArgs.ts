import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionUpdateInput } from "../../../inputs/PollOptionUpdateInput";
import { PollOptionWhereUniqueInput } from "../../../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionUpdateInput, {
    nullable: false,
  })
  data!: PollOptionUpdateInput;

  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: false,
  })
  where!: PollOptionWhereUniqueInput;
}
