import * as TypeGraphQL from "type-graphql";

export enum StoryOrderByRelevanceFieldEnum {
  id = "id",
  mediaUrl = "mediaUrl",
  link = "link",
  userId = "userId",
}
TypeGraphQL.registerEnumType(StoryOrderByRelevanceFieldEnum, {
  name: "StoryOrderByRelevanceFieldEnum",
  description: undefined,
});
