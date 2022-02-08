import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SettingsWhereInput", {
  isAbstract: true,
})
export class SettingsWhereInput {
  @TypeGraphQL.Field(_type => [SettingsWhereInput], {
    nullable: true,
  })
  AND?: SettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsWhereInput], {
    nullable: true,
  })
  OR?: SettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsWhereInput], {
    nullable: true,
  })
  NOT?: SettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  userId?: StringNullableFilter | undefined;
}
