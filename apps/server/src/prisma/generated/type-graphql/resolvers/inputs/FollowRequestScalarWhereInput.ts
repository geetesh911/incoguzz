import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FollowRequestScalarWhereInput", {
  isAbstract: true,
})
export class FollowRequestScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereInput], {
    nullable: true,
  })
  AND?: FollowRequestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereInput], {
    nullable: true,
  })
  OR?: FollowRequestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereInput], {
    nullable: true,
  })
  NOT?: FollowRequestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  message?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  sourceUserId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  targetUserId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
