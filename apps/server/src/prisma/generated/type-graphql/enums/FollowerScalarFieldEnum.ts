import * as TypeGraphQL from "type-graphql";

export enum FollowerScalarFieldEnum {
  id = "id",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(FollowerScalarFieldEnum, {
  name: "FollowerScalarFieldEnum",
  description: undefined,
});
