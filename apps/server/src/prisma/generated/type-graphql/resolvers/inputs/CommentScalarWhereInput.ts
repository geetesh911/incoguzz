import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CommentScalarWhereInput", {
  isAbstract: true,
})
export class CommentScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true,
  })
  AND?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true,
  })
  OR?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true,
  })
  NOT?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  comment?: StringFilter | undefined;

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
