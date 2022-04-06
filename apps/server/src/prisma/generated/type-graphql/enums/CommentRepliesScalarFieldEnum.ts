import * as TypeGraphQL from "type-graphql";

export enum CommentRepliesScalarFieldEnum {
  id = "id",
  comment = "comment",
  repliedToId = "repliedToId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(CommentRepliesScalarFieldEnum, {
  name: "CommentRepliesScalarFieldEnum",
  description: undefined,
});
