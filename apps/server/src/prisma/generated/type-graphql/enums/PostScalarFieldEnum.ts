import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  userId = "userId",
  caption = "caption",
  type = "type",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  placeId = "placeId",
  archive = "archive",
  published = "published",
  slug = "slug",
  views = "views",
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
