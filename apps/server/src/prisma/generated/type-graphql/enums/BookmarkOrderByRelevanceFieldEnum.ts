import * as TypeGraphQL from "type-graphql";

export enum BookmarkOrderByRelevanceFieldEnum {
  id = "id",
  postId = "postId",
  userId = "userId",
}
TypeGraphQL.registerEnumType(BookmarkOrderByRelevanceFieldEnum, {
  name: "BookmarkOrderByRelevanceFieldEnum",
  description: undefined,
});
