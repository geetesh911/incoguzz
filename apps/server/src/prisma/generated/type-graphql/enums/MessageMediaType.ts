import * as TypeGraphQL from "type-graphql";

export enum MessageMediaType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT",
  POST = "POST",
  STORY = "STORY",
}
TypeGraphQL.registerEnumType(MessageMediaType, {
  name: "MessageMediaType",
  description: undefined,
});
