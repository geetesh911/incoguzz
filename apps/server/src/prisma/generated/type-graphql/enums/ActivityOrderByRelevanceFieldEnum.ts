import * as TypeGraphQL from "type-graphql";

export enum ActivityOrderByRelevanceFieldEnum {
  id = "id",
  userId = "userId",
  postId = "postId",
}
TypeGraphQL.registerEnumType(ActivityOrderByRelevanceFieldEnum, {
  name: "ActivityOrderByRelevanceFieldEnum",
  description: undefined,
});
