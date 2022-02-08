import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualWhereUniqueInput } from "../../../inputs/TextualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTextualArgs {
  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: false,
  })
  where!: TextualWhereUniqueInput;
}
