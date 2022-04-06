import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionTypeFilter } from "../inputs/EnumReactionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReactionScalarWhereInput", {
  isAbstract: true,
})
export class ReactionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true,
  })
  AND?: ReactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true,
  })
  OR?: ReactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true,
  })
  NOT?: ReactionScalarWhereInput[] | undefined;

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
