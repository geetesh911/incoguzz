import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsCreateOrConnectWithoutUserInput } from "../inputs/SettingsCreateOrConnectWithoutUserInput";
import { SettingsCreateWithoutUserInput } from "../inputs/SettingsCreateWithoutUserInput";
import { SettingsUpdateWithoutUserInput } from "../inputs/SettingsUpdateWithoutUserInput";
import { SettingsUpsertWithoutUserInput } from "../inputs/SettingsUpsertWithoutUserInput";
import { SettingsWhereUniqueInput } from "../inputs/SettingsWhereUniqueInput";

@TypeGraphQL.InputType("SettingsUpdateOneWithoutUserInput", {
  isAbstract: true,
})
export class SettingsUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => SettingsCreateWithoutUserInput, {
    nullable: true,
  })
  create?: SettingsCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SettingsCreateOrConnectWithoutUserInput, {
    nullable: true,
  })
  connectOrCreate?: SettingsCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SettingsUpsertWithoutUserInput, {
    nullable: true,
  })
  upsert?: SettingsUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SettingsWhereUniqueInput, {
    nullable: true,
  })
  connect?: SettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SettingsUpdateWithoutUserInput, {
    nullable: true,
  })
  update?: SettingsUpdateWithoutUserInput | undefined;
}
