import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CommentRepliesScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class CommentRepliesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: CommentRepliesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: CommentRepliesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: CommentRepliesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  comment?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  repliedToId?: StringWithAggregatesFilter | undefined;

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
