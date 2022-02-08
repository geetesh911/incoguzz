import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsCountOrderByAggregateInput } from "../inputs/SettingsCountOrderByAggregateInput";
import { SettingsMaxOrderByAggregateInput } from "../inputs/SettingsMaxOrderByAggregateInput";
import { SettingsMinOrderByAggregateInput } from "../inputs/SettingsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingsOrderByWithAggregationInput", {
  isAbstract: true,
})
export class SettingsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SettingsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: SettingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: SettingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: SettingsMinOrderByAggregateInput | undefined;
}
