import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReactionTypeFilter } from "../inputs/NestedEnumReactionTypeFilter";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("EnumReactionTypeFilter", {
  isAbstract: true,
})
export class EnumReactionTypeFilter {
  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: true,
  })
  equals?: "LIKE" | "LAUGH" | "COOL" | "FIRE" | "CELEBRATE" | undefined;

  @TypeGraphQL.Field(_type => [ReactionType], {
    nullable: true,
  })
  in?: Array<"LIKE" | "LAUGH" | "COOL" | "FIRE" | "CELEBRATE"> | undefined;

  @TypeGraphQL.Field(_type => [ReactionType], {
    nullable: true,
  })
  notIn?: Array<"LIKE" | "LAUGH" | "COOL" | "FIRE" | "CELEBRATE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReactionTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumReactionTypeFilter | undefined;
}
