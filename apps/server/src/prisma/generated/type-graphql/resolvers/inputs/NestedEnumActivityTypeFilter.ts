import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.InputType("NestedEnumActivityTypeFilter", {
  isAbstract: true,
})
export class NestedEnumActivityTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumActivityTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumActivityTypeFilter | undefined;
}
