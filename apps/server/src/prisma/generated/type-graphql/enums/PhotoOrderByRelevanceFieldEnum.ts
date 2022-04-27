import * as TypeGraphQL from "type-graphql";

export enum PhotoOrderByRelevanceFieldEnum {
  id = "id",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(PhotoOrderByRelevanceFieldEnum, {
  name: "PhotoOrderByRelevanceFieldEnum",
  description: undefined,
});
