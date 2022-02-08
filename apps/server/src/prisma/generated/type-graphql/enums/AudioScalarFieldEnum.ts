import * as TypeGraphQL from "type-graphql";

export enum AudioScalarFieldEnum {
  id = "id",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(AudioScalarFieldEnum, {
  name: "AudioScalarFieldEnum",
  description: undefined,
});
