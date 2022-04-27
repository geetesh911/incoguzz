import * as TypeGraphQL from "type-graphql";

export enum ClipOrderByRelevanceFieldEnum {
  id = "id",
  url = "url",
  postId = "postId",
  thumbnailUrl = "thumbnailUrl",
  clipAudioId = "clipAudioId",
}
TypeGraphQL.registerEnumType(ClipOrderByRelevanceFieldEnum, {
  name: "ClipOrderByRelevanceFieldEnum",
  description: undefined,
});
