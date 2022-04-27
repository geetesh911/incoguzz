import * as TypeGraphQL from "type-graphql";

export enum CommentOrderByRelevanceFieldEnum {
  id = "id",
  comment = "comment",
  postId = "postId",
  userId = "userId",
}
TypeGraphQL.registerEnumType(CommentOrderByRelevanceFieldEnum, {
  name: "CommentOrderByRelevanceFieldEnum",
  description: undefined,
});
