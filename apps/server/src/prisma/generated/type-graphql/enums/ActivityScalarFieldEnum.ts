import * as TypeGraphQL from "type-graphql";

export enum ActivityScalarFieldEnum {
  id = "id",
  type = "type",
  userId = "userId",
  postId = "postId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(ActivityScalarFieldEnum, {
  name: "ActivityScalarFieldEnum",
  description: undefined,
});
