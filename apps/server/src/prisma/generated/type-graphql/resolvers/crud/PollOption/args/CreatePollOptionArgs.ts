import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionCreateInput } from "../../../inputs/PollOptionCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionCreateInput, {
    nullable: false,
  })
  data!: PollOptionCreateInput;
}
