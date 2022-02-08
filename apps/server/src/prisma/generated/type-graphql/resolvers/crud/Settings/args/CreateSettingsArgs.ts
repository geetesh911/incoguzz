import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsCreateInput } from "../../../inputs/SettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSettingsArgs {
  @TypeGraphQL.Field(_type => SettingsCreateInput, {
    nullable: false,
  })
  data!: SettingsCreateInput;
}
