import * as TypeGraphQL from "type-graphql";

export enum CommentRepliesOrderByRelevanceFieldEnum {
  id = "id",
  comment = "comment",
  repliedToId = "repliedToId",
  userId = "userId",
}
TypeGraphQL.registerEnumType(CommentRepliesOrderByRelevanceFieldEnum, {
  name: "CommentRepliesOrderByRelevanceFieldEnum",
  description: undefined,
});
