import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("StoryScalarWhereInput", {
  isAbstract: true,
})
export class StoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [StoryScalarWhereInput], {
    nullable: true,
  })
  AND?: StoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryScalarWhereInput], {
    nullable: true,
  })
  OR?: StoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryScalarWhereInput], {
    nullable: true,
  })
  NOT?: StoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  mediaUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  link?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
