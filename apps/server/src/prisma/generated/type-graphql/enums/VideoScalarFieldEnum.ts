import * as TypeGraphQL from "type-graphql";

export enum VideoScalarFieldEnum {
  id = "id",
  thumbnailUrl = "thumbnailUrl",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(VideoScalarFieldEnum, {
  name: "VideoScalarFieldEnum",
  description: undefined,
});
