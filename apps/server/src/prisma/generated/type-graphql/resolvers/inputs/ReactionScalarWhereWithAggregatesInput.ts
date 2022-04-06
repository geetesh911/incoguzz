import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionTypeWithAggregatesFilter } from "../inputs/EnumReactionTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReactionScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ReactionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReactionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ReactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ReactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ReactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionTypeWithAggregatesFilter, {
    nullable: true,
  })
  reaction?: EnumReactionTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
