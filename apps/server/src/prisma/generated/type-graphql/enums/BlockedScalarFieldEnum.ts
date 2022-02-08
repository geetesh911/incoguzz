import * as TypeGraphQL from "type-graphql";

export enum BlockedScalarFieldEnum {
  id = "id",
  sourceUserId = "sourceUserId",
  targetUserId = "targetUserId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(BlockedScalarFieldEnum, {
  name: "BlockedScalarFieldEnum",
  description: undefined,
});
