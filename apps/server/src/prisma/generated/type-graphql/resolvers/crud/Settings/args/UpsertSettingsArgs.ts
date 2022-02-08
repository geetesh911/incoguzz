import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsCreateInput } from "../../../inputs/SettingsCreateInput";
import { SettingsUpdateInput } from "../../../inputs/SettingsUpdateInput";
import { SettingsWhereUniqueInput } from "../../../inputs/SettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSettingsArgs {
  @TypeGraphQL.Field(_type => SettingsWhereUniqueInput, {
    nullable: false,
  })
  where!: SettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingsCreateInput, {
    nullable: false,
  })
  create!: SettingsCreateInput;

  @TypeGraphQL.Field(_type => SettingsUpdateInput, {
    nullable: false,
  })
  update!: SettingsUpdateInput;
}
