import * as TypeGraphQL from "type-graphql";

export enum BookmarkScalarFieldEnum {
  id = "id",
  postId = "postId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(BookmarkScalarFieldEnum, {
  name: "BookmarkScalarFieldEnum",
  description: undefined,
});
