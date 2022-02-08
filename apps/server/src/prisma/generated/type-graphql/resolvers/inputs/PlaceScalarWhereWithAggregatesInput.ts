import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PlaceScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class PlaceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlaceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PlaceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PlaceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PlaceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  address?: StringWithAggregatesFilter | undefined;
}
