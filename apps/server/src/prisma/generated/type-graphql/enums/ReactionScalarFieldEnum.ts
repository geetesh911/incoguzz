import * as TypeGraphQL from "type-graphql";

export enum ReactionScalarFieldEnum {
  id = "id",
  postId = "postId",
  userId = "userId",
  reaction = "reaction",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(ReactionScalarFieldEnum, {
  name: "ReactionScalarFieldEnum",
  description: undefined,
});
