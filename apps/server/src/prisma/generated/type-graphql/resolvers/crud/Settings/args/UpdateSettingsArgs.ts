import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsUpdateInput } from "../../../inputs/SettingsUpdateInput";
import { SettingsWhereUniqueInput } from "../../../inputs/SettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSettingsArgs {
  @TypeGraphQL.Field(_type => SettingsUpdateInput, {
    nullable: false,
  })
  data!: SettingsUpdateInput;

  @TypeGraphQL.Field(_type => SettingsWhereUniqueInput, {
    nullable: false,
  })
  where!: SettingsWhereUniqueInput;
}
