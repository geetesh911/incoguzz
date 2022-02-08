import * as TypeGraphQL from "type-graphql";

export enum ClipScalarFieldEnum {
  id = "id",
  url = "url",
  postId = "postId",
  thumbnailUrl = "thumbnailUrl",
  clipAudioId = "clipAudioId",
}
TypeGraphQL.registerEnumType(ClipScalarFieldEnum, {
  name: "ClipScalarFieldEnum",
  description: undefined,
});
