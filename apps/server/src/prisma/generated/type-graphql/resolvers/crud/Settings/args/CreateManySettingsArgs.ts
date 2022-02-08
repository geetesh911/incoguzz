import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsCreateManyInput } from "../../../inputs/SettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySettingsArgs {
  @TypeGraphQL.Field(_type => [SettingsCreateManyInput], {
    nullable: false,
  })
  data!: SettingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
