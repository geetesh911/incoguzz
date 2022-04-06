import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesListRelationFilter } from "../inputs/CommentRepliesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CommentWhereInput", {
  isAbstract: true,
})
export class CommentWhereInput {
  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
  })
  AND?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
  })
  OR?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
  })
  NOT?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  comment?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesListRelationFilter, {
    nullable: true,
  })
  commentReplies?: CommentRepliesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
