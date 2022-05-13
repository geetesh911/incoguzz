import * as TypeGraphQL from "type-graphql";

export enum MessageOrderByRelevanceFieldEnum {
  id = "id",
  message = "message",
  mediaUrl = "mediaUrl",
  mediaThumbnailUrl = "mediaThumbnailUrl",
  postId = "postId",
  storyId = "storyId",
  sourceUserId = "sourceUserId",
  targetUserId = "targetUserId",
  replyToId = "replyToId",
}
TypeGraphQL.registerEnumType(MessageOrderByRelevanceFieldEnum, {
  name: "MessageOrderByRelevanceFieldEnum",
  description: undefined,
});
