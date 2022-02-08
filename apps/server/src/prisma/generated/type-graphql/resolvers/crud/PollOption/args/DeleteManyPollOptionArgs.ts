import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionWhereInput } from "../../../inputs/PollOptionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  where?: PollOptionWhereInput | undefined;
}
