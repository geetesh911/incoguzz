import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BlockedScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class BlockedScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BlockedScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: BlockedScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: BlockedScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: BlockedScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  sourceUserId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  targetUserId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
