import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualOrderByWithRelationInput } from "../../../inputs/TextualOrderByWithRelationInput";
import { TextualWhereInput } from "../../../inputs/TextualWhereInput";
import { TextualWhereUniqueInput } from "../../../inputs/TextualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTextualArgs {
  @TypeGraphQL.Field(_type => TextualWhereInput, {
    nullable: true,
  })
  where?: TextualWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TextualOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: TextualOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: true,
  })
  cursor?: TextualWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
