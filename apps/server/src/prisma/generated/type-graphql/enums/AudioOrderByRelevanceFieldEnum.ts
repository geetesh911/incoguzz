import * as TypeGraphQL from "type-graphql";

export enum AudioOrderByRelevanceFieldEnum {
  id = "id",
  url = "url",
  postId = "postId",
  thumbnailUrl = "thumbnailUrl",
}
TypeGraphQL.registerEnumType(AudioOrderByRelevanceFieldEnum, {
  name: "AudioOrderByRelevanceFieldEnum",
  description: undefined,
});
