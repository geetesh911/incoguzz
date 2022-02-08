import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsUpdateManyMutationInput } from "../../../inputs/SettingsUpdateManyMutationInput";
import { SettingsWhereInput } from "../../../inputs/SettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySettingsArgs {
  @TypeGraphQL.Field(_type => SettingsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: SettingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SettingsWhereInput, {
    nullable: true,
  })
  where?: SettingsWhereInput | undefined;
}
