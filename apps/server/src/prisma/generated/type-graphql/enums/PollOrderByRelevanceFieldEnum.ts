import * as TypeGraphQL from "type-graphql";

export enum PollOrderByRelevanceFieldEnum {
  id = "id",
  question = "question",
  postId = "postId",
}
TypeGraphQL.registerEnumType(PollOrderByRelevanceFieldEnum, {
  name: "PollOrderByRelevanceFieldEnum",
  description: undefined,
});
