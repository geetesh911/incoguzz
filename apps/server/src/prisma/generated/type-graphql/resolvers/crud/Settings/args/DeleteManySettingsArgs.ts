import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsWhereInput } from "../../../inputs/SettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySettingsArgs {
  @TypeGraphQL.Field(_type => SettingsWhereInput, {
    nullable: true,
  })
  where?: SettingsWhereInput | undefined;
}
