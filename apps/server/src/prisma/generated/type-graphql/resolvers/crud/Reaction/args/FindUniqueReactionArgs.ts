import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionWhereUniqueInput } from "../../../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReactionArgs {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false,
  })
  where!: ReactionWhereUniqueInput;
}
