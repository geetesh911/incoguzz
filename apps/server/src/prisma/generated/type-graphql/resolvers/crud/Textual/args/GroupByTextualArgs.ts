import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualOrderByWithAggregationInput } from "../../../inputs/TextualOrderByWithAggregationInput";
import { TextualScalarWhereWithAggregatesInput } from "../../../inputs/TextualScalarWhereWithAggregatesInput";
import { TextualWhereInput } from "../../../inputs/TextualWhereInput";
import { TextualScalarFieldEnum } from "../../../../enums/TextualScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTextualArgs {
  @TypeGraphQL.Field(_type => TextualWhereInput, {
    nullable: true,
  })
  where?: TextualWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TextualOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: TextualOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TextualScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "text" | "postId">;

  @TypeGraphQL.Field(_type => TextualScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: TextualScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
