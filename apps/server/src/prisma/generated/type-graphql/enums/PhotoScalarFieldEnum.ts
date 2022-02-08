import * as TypeGraphQL from "type-graphql";

export enum PhotoScalarFieldEnum {
  id = "id",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(PhotoScalarFieldEnum, {
  name: "PhotoScalarFieldEnum",
  description: undefined,
});
