import * as TypeGraphQL from "type-graphql";

export enum ActivityType {
  LIKED = "LIKED",
  COMMENTED = "COMMENTED",
  POSTED = "POSTED",
  SHARED = "SHARED",
}
TypeGraphQL.registerEnumType(ActivityType, {
  name: "ActivityType",
  description: undefined,
});
