import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRelationshipStatusNullableFilter } from "../inputs/NestedEnumRelationshipStatusNullableFilter";
import { NestedEnumRelationshipStatusNullableWithAggregatesFilter } from "../inputs/NestedEnumRelationshipStatusNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { RelationshipStatus } from "../../enums/RelationshipStatus";

@TypeGraphQL.InputType("EnumRelationshipStatusNullableWithAggregatesFilter", {
  isAbstract: true,
})
export class EnumRelationshipStatusNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(
    _type => NestedEnumRelationshipStatusNullableWithAggregatesFilter,
    {
      nullable: true,
    },
  )
  not?: NestedEnumRelationshipStatusNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true,
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRelationshipStatusNullableFilter, {
    nullable: true,
  })
  _min?: NestedEnumRelationshipStatusNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRelationshipStatusNullableFilter, {
    nullable: true,
  })
  _max?: NestedEnumRelationshipStatusNullableFilter | undefined;
}
