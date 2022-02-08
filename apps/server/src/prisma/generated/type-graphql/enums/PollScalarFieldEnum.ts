import * as TypeGraphQL from "type-graphql";

export enum PollScalarFieldEnum {
  id = "id",
  question = "question",
  postId = "postId",
}
TypeGraphQL.registerEnumType(PollScalarFieldEnum, {
  name: "PollScalarFieldEnum",
  description: undefined,
});
