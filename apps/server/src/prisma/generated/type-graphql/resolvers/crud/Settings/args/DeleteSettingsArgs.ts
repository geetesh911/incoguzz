import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsWhereUniqueInput } from "../../../inputs/SettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSettingsArgs {
  @TypeGraphQL.Field(_type => SettingsWhereUniqueInput, {
    nullable: false,
  })
  where!: SettingsWhereUniqueInput;
}
