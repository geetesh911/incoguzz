import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsOrderByWithRelationInput } from "../../../inputs/SettingsOrderByWithRelationInput";
import { SettingsWhereInput } from "../../../inputs/SettingsWhereInput";
import { SettingsWhereUniqueInput } from "../../../inputs/SettingsWhereUniqueInput";
import { SettingsScalarFieldEnum } from "../../../../enums/SettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySettingsArgs {
  @TypeGraphQL.Field(_type => SettingsWhereInput, {
    nullable: true,
  })
  where?: SettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingsOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: SettingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingsWhereUniqueInput, {
    nullable: true,
  })
  cursor?: SettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SettingsScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "userId"> | undefined;
}
