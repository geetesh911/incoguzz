import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionTypeFilter } from "../inputs/EnumReactionTypeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReactionWhereInput", {
  isAbstract: true,
})
export class ReactionWhereInput {
  @TypeGraphQL.Field(_type => [ReactionWhereInput], {
    nullable: true,
  })
  AND?: ReactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereInput], {
    nullable: true,
  })
  OR?: ReactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereInput], {
    nullable: true,
  })
  NOT?: ReactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => EnumReactionTypeFilter, {
    nullable: true,
  })
  reaction?: EnumReactionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
