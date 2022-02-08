import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RelationshipStatus } from "../../enums/RelationshipStatus";

@TypeGraphQL.InputType("NestedEnumRelationshipStatusNullableFilter", {
  isAbstract: true,
})
export class NestedEnumRelationshipStatusNullableFilter {
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
