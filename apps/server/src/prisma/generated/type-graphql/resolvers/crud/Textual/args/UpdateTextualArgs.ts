import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualUpdateInput } from "../../../inputs/TextualUpdateInput";
import { TextualWhereUniqueInput } from "../../../inputs/TextualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTextualArgs {
  @TypeGraphQL.Field(_type => TextualUpdateInput, {
    nullable: false,
  })
  data!: TextualUpdateInput;

  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: false,
  })
  where!: TextualWhereUniqueInput;
}
