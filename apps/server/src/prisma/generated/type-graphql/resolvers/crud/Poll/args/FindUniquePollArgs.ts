import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollWhereUniqueInput } from "../../../inputs/PollWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePollArgs {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;
}
