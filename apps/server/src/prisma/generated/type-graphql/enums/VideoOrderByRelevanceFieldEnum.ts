import * as TypeGraphQL from "type-graphql";

export enum VideoOrderByRelevanceFieldEnum {
  id = "id",
  thumbnailUrl = "thumbnailUrl",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(VideoOrderByRelevanceFieldEnum, {
  name: "VideoOrderByRelevanceFieldEnum",
  description: undefined,
});
