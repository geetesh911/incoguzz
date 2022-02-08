import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionWhereUniqueInput } from "../../../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: false,
  })
  where!: PollOptionWhereUniqueInput;
}
