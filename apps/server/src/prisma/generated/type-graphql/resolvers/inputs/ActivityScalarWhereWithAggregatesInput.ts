import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumActivityTypeWithAggregatesFilter } from "../inputs/EnumActivityTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActivityScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ActivityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActivityScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActivityTypeWithAggregatesFilter, {
    nullable: true,
  })
  type?: EnumActivityTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
