import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FollowerWhereInput", {
  isAbstract: true,
})
export class FollowerWhereInput {
  @TypeGraphQL.Field(_type => [FollowerWhereInput], {
    nullable: true,
  })
  AND?: FollowerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereInput], {
    nullable: true,
  })
  OR?: FollowerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereInput], {
    nullable: true,
  })
  NOT?: FollowerWhereInput[] | undefined;

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
