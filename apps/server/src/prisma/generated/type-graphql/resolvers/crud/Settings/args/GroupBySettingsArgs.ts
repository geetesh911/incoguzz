import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsOrderByWithAggregationInput } from "../../../inputs/SettingsOrderByWithAggregationInput";
import { SettingsScalarWhereWithAggregatesInput } from "../../../inputs/SettingsScalarWhereWithAggregatesInput";
import { SettingsWhereInput } from "../../../inputs/SettingsWhereInput";
import { SettingsScalarFieldEnum } from "../../../../enums/SettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySettingsArgs {
  @TypeGraphQL.Field(_type => SettingsWhereInput, {
    nullable: true,
  })
  where?: SettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: SettingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "userId">;

  @TypeGraphQL.Field(_type => SettingsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: SettingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
