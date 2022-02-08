import * as TypeGraphQL from "type-graphql";

export enum FollowRequestScalarFieldEnum {
  id = "id",
  message = "message",
  sourceUserId = "sourceUserId",
  targetUserId = "targetUserId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(FollowRequestScalarFieldEnum, {
  name: "FollowRequestScalarFieldEnum",
  description: undefined,
});
