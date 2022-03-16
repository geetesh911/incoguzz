import * as TypeGraphQL from "type-graphql";

export enum AudioScalarFieldEnum {
  id = "id",
  url = "url",
  postId = "postId",
  thumbnailUrl = "thumbnailUrl",
}
TypeGraphQL.registerEnumType(AudioScalarFieldEnum, {
  name: "AudioScalarFieldEnum",
  description: undefined,
});
