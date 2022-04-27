import * as TypeGraphQL from "type-graphql";

export enum ActivityType {
  REACTED = "REACTED",
  COMMENTED = "COMMENTED",
  POSTED = "POSTED",
  SHARED = "SHARED",
  VIEWED = "VIEWED",
  BOOKMARKED = "BOOKMARKED",
}
TypeGraphQL.registerEnumType(ActivityType, {
  name: "ActivityType",
  description: undefined,
});
