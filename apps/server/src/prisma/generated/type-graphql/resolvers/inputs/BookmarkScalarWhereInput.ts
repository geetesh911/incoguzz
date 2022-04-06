import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BookmarkScalarWhereInput", {
  isAbstract: true,
})
export class BookmarkScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true,
  })
  AND?: BookmarkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true,
  })
  OR?: BookmarkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true,
  })
  NOT?: BookmarkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;

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
