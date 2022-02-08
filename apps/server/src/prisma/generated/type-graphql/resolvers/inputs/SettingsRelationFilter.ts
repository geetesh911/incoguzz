import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsWhereInput } from "../inputs/SettingsWhereInput";

@TypeGraphQL.InputType("SettingsRelationFilter", {
  isAbstract: true,
})
export class SettingsRelationFilter {
  @TypeGraphQL.Field(_type => SettingsWhereInput, {
    nullable: true,
  })
  is?: SettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SettingsWhereInput, {
    nullable: true,
  })
  isNot?: SettingsWhereInput | undefined;
}
