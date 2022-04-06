import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookmarkScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class BookmarkScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookmarkScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: BookmarkScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: BookmarkScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: BookmarkScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
