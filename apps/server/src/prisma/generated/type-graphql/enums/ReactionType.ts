import * as TypeGraphQL from "type-graphql";

export enum ReactionType {
  LIKE = "LIKE",
  LAUGH = "LAUGH",
  COOL = "COOL",
  FIRE = "FIRE",
  CELEBRATE = "CELEBRATE",
}
TypeGraphQL.registerEnumType(ReactionType, {
  name: "ReactionType",
  description: undefined,
});
