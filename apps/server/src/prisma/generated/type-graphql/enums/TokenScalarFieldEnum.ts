import * as TypeGraphQL from "type-graphql";

export enum TokenScalarFieldEnum {
  id = "id",
  userId = "userId",
  token = "token",
  firstUsed = "firstUsed",
  finalUsed = "finalUsed",
  expires = "expires",
  type = "type",
  ip = "ip",
  browser = "browser",
  country = "country",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(TokenScalarFieldEnum, {
  name: "TokenScalarFieldEnum",
  description: undefined,
});
