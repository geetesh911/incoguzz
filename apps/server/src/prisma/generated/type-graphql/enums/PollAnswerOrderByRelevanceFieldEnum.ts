import * as TypeGraphQL from "type-graphql";

export enum PollAnswerOrderByRelevanceFieldEnum {
  id = "id",
  userId = "userId",
  pollId = "pollId",
  pollOptionId = "pollOptionId",
}
TypeGraphQL.registerEnumType(PollAnswerOrderByRelevanceFieldEnum, {
  name: "PollAnswerOrderByRelevanceFieldEnum",
  description: undefined,
});
