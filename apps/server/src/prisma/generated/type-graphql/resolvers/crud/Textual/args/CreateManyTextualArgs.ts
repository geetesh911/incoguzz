import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualCreateManyInput } from "../../../inputs/TextualCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTextualArgs {
  @TypeGraphQL.Field(_type => [TextualCreateManyInput], {
    nullable: false,
  })
  data!: TextualCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
