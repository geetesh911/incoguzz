import * as TypeGraphQL from "type-graphql";

export enum PollAnswerScalarFieldEnum {
  id = "id",
  userId = "userId",
  pollId = "pollId",
  pollOptionId = "pollOptionId",
}
TypeGraphQL.registerEnumType(PollAnswerScalarFieldEnum, {
  name: "PollAnswerScalarFieldEnum",
  description: undefined,
});
