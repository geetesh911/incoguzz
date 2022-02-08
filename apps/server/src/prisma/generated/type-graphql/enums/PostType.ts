import * as TypeGraphQL from "type-graphql";

export enum PostType {
  POLL = "POLL",
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  CLIP = "CLIP",
  TEXTUAL = "TEXTUAL",
  AUDIO = "AUDIO",
}
TypeGraphQL.registerEnumType(PostType, {
  name: "PostType",
  description: undefined,
});
