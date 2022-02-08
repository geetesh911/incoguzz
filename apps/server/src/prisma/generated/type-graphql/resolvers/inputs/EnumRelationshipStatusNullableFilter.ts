import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRelationshipStatusNullableFilter } from "../inputs/NestedEnumRelationshipStatusNullableFilter";
import { RelationshipStatus } from "../../enums/RelationshipStatus";

@TypeGraphQL.InputType("EnumRelationshipStatusNullableFilter", {
  isAbstract: true,
})
export class EnumRelationshipStatusNullableFilter {
  @TypeGraphQL.Field(_type => RelationshipStatus, {
    nullable: true,
  })
  equals?:
    | "SINGLE"
    | "ENGAGED"
    | "MARRIED"
    | "SEPERATED"
    | "DIVORCED"
    | "WIDOWED"
    | "ITS_COMPLICATED"
    | "IN_A_RELATIONSHIP"
    | undefined;

  @TypeGraphQL.Field(_type => [RelationshipStatus], {
    nullable: true,
  })
  in?:
    | Array<
        | "SINGLE"
        | "ENGAGED"
        | "MARRIED"
        | "SEPERATED"
        | "DIVORCED"
        | "WIDOWED"
        | "ITS_COMPLICATED"
        | "IN_A_RELATIONSHIP"
      >
    | undefined;

  @TypeGraphQL.Field(_type => [RelationshipStatus], {
    nullable: true,
  })
  notIn?:
    | Array<
        | "SINGLE"
        | "ENGAGED"
        | "MARRIED"
        | "SEPERATED"
        | "DIVORCED"
        | "WIDOWED"
        | "ITS_COMPLICATED"
        | "IN_A_RELATIONSHIP"
      >
    | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRelationshipStatusNullableFilter, {
    nullable: true,
  })
  not?: NestedEnumRelationshipStatusNullableFilter | undefined;
}
