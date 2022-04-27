import * as TypeGraphQL from "type-graphql";

export enum TokenOrderByRelevanceFieldEnum {
  id = "id",
  userId = "userId",
  token = "token",
  ip = "ip",
  browser = "browser",
  country = "country",
}
TypeGraphQL.registerEnumType(TokenOrderByRelevanceFieldEnum, {
  name: "TokenOrderByRelevanceFieldEnum",
  description: undefined,
});
