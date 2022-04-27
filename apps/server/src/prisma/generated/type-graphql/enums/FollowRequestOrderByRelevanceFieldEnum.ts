import * as TypeGraphQL from "type-graphql";

export enum FollowRequestOrderByRelevanceFieldEnum {
  id = "id",
  message = "message",
  sourceUserId = "sourceUserId",
  targetUserId = "targetUserId",
}
TypeGraphQL.registerEnumType(FollowRequestOrderByRelevanceFieldEnum, {
  name: "FollowRequestOrderByRelevanceFieldEnum",
  description: undefined,
});
