import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RelationshipStatus } from "../../enums/RelationshipStatus";

@TypeGraphQL.InputType(
  "NullableEnumRelationshipStatusFieldUpdateOperationsInput",
  {
    isAbstract: true,
  },
)
export class NullableEnumRelationshipStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => RelationshipStatus, {
    nullable: true,
  })
  set?:
    | "SINGLE"
    | "ENGAGED"
    | "MARRIED"
    | "SEPERATED"
    | "DIVORCED"
    | "WIDOWED"
    | "ITS_COMPLICATED"
    | "IN_A_RELATIONSHIP"
    | undefined;
}
