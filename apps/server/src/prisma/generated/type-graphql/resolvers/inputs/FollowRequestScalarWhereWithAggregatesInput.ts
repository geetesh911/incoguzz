import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FollowRequestScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class FollowRequestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: FollowRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: FollowRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: FollowRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  message?: StringNullableWithAggregatesFilter | undefined;

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
