import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumMessageMediaTypeWithAggregatesFilter } from "../inputs/EnumMessageMediaTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MessageScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class MessageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MessageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  message?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  mediaUrl?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  storyId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  sourceUserId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  targetUserId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  replyToId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMessageMediaTypeWithAggregatesFilter, {
    nullable: true,
  })
  mediaType?: EnumMessageMediaTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
