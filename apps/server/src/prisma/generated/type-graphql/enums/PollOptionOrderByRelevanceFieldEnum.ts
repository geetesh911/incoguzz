import * as TypeGraphQL from "type-graphql";

export enum PollOptionOrderByRelevanceFieldEnum {
  id = "id",
  option = "option",
  pollId = "pollId",
}
TypeGraphQL.registerEnumType(PollOptionOrderByRelevanceFieldEnum, {
  name: "PollOptionOrderByRelevanceFieldEnum",
  description: undefined,
});
