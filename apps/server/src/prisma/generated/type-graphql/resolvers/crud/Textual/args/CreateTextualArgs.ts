import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualCreateInput } from "../../../inputs/TextualCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTextualArgs {
  @TypeGraphQL.Field(_type => TextualCreateInput, {
    nullable: false,
  })
  data!: TextualCreateInput;
}
