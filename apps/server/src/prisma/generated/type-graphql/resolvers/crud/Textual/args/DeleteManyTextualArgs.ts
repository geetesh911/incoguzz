import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualWhereInput } from "../../../inputs/TextualWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTextualArgs {
  @TypeGraphQL.Field(_type => TextualWhereInput, {
    nullable: true,
  })
  where?: TextualWhereInput | undefined;
}
