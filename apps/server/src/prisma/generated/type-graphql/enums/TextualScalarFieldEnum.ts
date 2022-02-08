import * as TypeGraphQL from "type-graphql";

export enum TextualScalarFieldEnum {
  id = "id",
  text = "text",
  postId = "postId",
}
TypeGraphQL.registerEnumType(TextualScalarFieldEnum, {
  name: "TextualScalarFieldEnum",
  description: undefined,
});
