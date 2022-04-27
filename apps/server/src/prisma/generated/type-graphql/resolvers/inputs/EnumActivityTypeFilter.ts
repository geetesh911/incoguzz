import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumActivityTypeFilter } from "../inputs/NestedEnumActivityTypeFilter";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.InputType("EnumActivityTypeFilter", {
  isAbstract: true,
})
export class EnumActivityTypeFilter {
  @TypeGraphQL.Field(_type => ActivityType, {
    nullable: true,
  })
  equals?:
    | "REACTED"
    | "COMMENTED"
    | "POSTED"
    | "SHARED"
    | "VIEWED"
    | "BOOKMARKED"
    | undefined;

  @TypeGraphQL.Field(_type => [ActivityType], {
    nullable: true,
  })
  in?:
    | Array<
        "REACTED" | "COMMENTED" | "POSTED" | "SHARED" | "VIEWED" | "BOOKMARKED"
      >
    | undefined;

  @TypeGraphQL.Field(_type => [ActivityType], {
    nullable: true,
  })
  notIn?:
    | Array<
        "REACTED" | "COMMENTED" | "POSTED" | "SHARED" | "VIEWED" | "BOOKMARKED"
      >
    | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActivityTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumActivityTypeFilter | undefined;
}
