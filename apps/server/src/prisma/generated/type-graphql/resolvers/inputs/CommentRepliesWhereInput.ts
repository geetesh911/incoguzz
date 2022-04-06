import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRelationFilter } from "../inputs/CommentRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CommentRepliesWhereInput", {
  isAbstract: true,
})
export class CommentRepliesWhereInput {
  @TypeGraphQL.Field(_type => [CommentRepliesWhereInput], {
    nullable: true,
  })
  AND?: CommentRepliesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereInput], {
    nullable: true,
  })
  OR?: CommentRepliesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereInput], {
    nullable: true,
  })
  NOT?: CommentRepliesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  comment?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CommentRelationFilter, {
    nullable: true,
  })
  repliedTo?: CommentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  repliedToId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

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
