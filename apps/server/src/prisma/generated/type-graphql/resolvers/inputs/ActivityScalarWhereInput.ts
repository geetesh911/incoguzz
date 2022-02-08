import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumActivityTypeFilter } from "../inputs/EnumActivityTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActivityScalarWhereInput", {
  isAbstract: true,
})
export class ActivityScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActivityScalarWhereInput], {
    nullable: true,
  })
  AND?: ActivityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarWhereInput], {
    nullable: true,
  })
  OR?: ActivityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarWhereInput], {
    nullable: true,
  })
  NOT?: ActivityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActivityTypeFilter, {
    nullable: true,
  })
  type?: EnumActivityTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
