import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsCountAggregate } from "../outputs/SettingsCountAggregate";
import { SettingsMaxAggregate } from "../outputs/SettingsMaxAggregate";
import { SettingsMinAggregate } from "../outputs/SettingsMinAggregate";

@TypeGraphQL.ObjectType("AggregateSettings", {
  isAbstract: true,
})
export class AggregateSettings {
  @TypeGraphQL.Field(_type => SettingsCountAggregate, {
    nullable: true,
  })
  _count!: SettingsCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingsMinAggregate, {
    nullable: true,
  })
  _min!: SettingsMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingsMaxAggregate, {
    nullable: true,
  })
  _max!: SettingsMaxAggregate | null;
}
