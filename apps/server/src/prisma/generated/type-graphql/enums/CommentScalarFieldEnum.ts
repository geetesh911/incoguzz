import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  comment = "comment",
  postId = "postId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
