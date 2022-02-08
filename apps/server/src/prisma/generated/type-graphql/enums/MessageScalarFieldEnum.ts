import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  message = "message",
  mediaUrl = "mediaUrl",
  postId = "postId",
  storyId = "storyId",
  sourceUserId = "sourceUserId",
  targetUserId = "targetUserId",
  replyToId = "replyToId",
  mediaType = "mediaType",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
