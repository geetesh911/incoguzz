import * as TypeGraphQL from "type-graphql";

export enum RelationshipStatus {
  SINGLE = "SINGLE",
  ENGAGED = "ENGAGED",
  MARRIED = "MARRIED",
  SEPERATED = "SEPERATED",
  DIVORCED = "DIVORCED",
  WIDOWED = "WIDOWED",
  ITS_COMPLICATED = "ITS_COMPLICATED",
  IN_A_RELATIONSHIP = "IN_A_RELATIONSHIP",
}
TypeGraphQL.registerEnumType(RelationshipStatus, {
  name: "RelationshipStatus",
  description: undefined,
});
