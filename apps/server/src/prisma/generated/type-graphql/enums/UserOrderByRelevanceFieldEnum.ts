import * as TypeGraphQL from "type-graphql";

export enum UserOrderByRelevanceFieldEnum {
  id = "id",
  email = "email",
  username = "username",
  password = "password",
  googleUserId = "googleUserId",
}
TypeGraphQL.registerEnumType(UserOrderByRelevanceFieldEnum, {
  name: "UserOrderByRelevanceFieldEnum",
  description: undefined,
});
