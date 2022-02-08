import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualCreateInput } from "../../../inputs/TextualCreateInput";
import { TextualUpdateInput } from "../../../inputs/TextualUpdateInput";
import { TextualWhereUniqueInput } from "../../../inputs/TextualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTextualArgs {
  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: false,
  })
  where!: TextualWhereUniqueInput;

  @TypeGraphQL.Field(_type => TextualCreateInput, {
    nullable: false,
  })
  create!: TextualCreateInput;

  @TypeGraphQL.Field(_type => TextualUpdateInput, {
    nullable: false,
  })
  update!: TextualUpdateInput;
}
