import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FollowingWhereInput", {
  isAbstract: true,
})
export class FollowingWhereInput {
  @TypeGraphQL.Field(_type => [FollowingWhereInput], {
    nullable: true,
  })
  AND?: FollowingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingWhereInput], {
    nullable: true,
  })
  OR?: FollowingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingWhereInput], {
    nullable: true,
  })
  NOT?: FollowingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

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
