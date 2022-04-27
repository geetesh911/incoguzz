import * as TypeGraphQL from "type-graphql";

export enum PostOrderByRelevanceFieldEnum {
  id = "id",
  userId = "userId",
  caption = "caption",
  placeId = "placeId",
  slug = "slug",
}
TypeGraphQL.registerEnumType(PostOrderByRelevanceFieldEnum, {
  name: "PostOrderByRelevanceFieldEnum",
  description: undefined,
});
