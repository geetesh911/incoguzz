import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SettingsScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class SettingsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SettingsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: SettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: SettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: SettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringNullableWithAggregatesFilter | undefined;
}
