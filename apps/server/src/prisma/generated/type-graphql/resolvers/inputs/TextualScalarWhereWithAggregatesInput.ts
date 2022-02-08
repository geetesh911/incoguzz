import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TextualScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class TextualScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TextualScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: TextualScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TextualScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: TextualScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TextualScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: TextualScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  text?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;
}
