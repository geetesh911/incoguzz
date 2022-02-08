import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollWhereInput } from "../../../inputs/PollWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPollArgs {
  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true,
  })
  where?: PollWhereInput | undefined;
}
