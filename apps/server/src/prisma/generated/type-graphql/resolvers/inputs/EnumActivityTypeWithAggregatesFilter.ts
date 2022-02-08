import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumActivityTypeFilter } from "../inputs/NestedEnumActivityTypeFilter";
import { NestedEnumActivityTypeWithAggregatesFilter } from "../inputs/NestedEnumActivityTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.InputType("EnumActivityTypeWithAggregatesFilter", {
  isAbstract: true,
})
export class EnumActivityTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ActivityType, {
    nullable: true,
  })
  equals?: "LIKED" | "COMMENTED" | "POSTED" | "SHARED" | undefined;

  @TypeGraphQL.Field(_type => [ActivityType], {
    nullable: true,
  })
  in?: Array<"LIKED" | "COMMENTED" | "POSTED" | "SHARED"> | undefined;

  @TypeGraphQL.Field(_type => [ActivityType], {
    nullable: true,
  })
  notIn?: Array<"LIKED" | "COMMENTED" | "POSTED" | "SHARED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActivityTypeWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumActivityTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActivityTypeFilter, {
    nullable: true,
  })
  _min?: NestedEnumActivityTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActivityTypeFilter, {
    nullable: true,
  })
  _max?: NestedEnumActivityTypeFilter | undefined;
}
