import * as TypeGraphQL from "type-graphql";

export enum FollowingScalarFieldEnum {
  id = "id",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(FollowingScalarFieldEnum, {
  name: "FollowingScalarFieldEnum",
  description: undefined,
});
