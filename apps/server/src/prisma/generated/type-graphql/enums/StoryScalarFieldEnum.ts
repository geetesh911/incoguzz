import * as TypeGraphQL from "type-graphql";

export enum StoryScalarFieldEnum {
  id = "id",
  mediaUrl = "mediaUrl",
  link = "link",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(StoryScalarFieldEnum, {
  name: "StoryScalarFieldEnum",
  description: undefined,
});
