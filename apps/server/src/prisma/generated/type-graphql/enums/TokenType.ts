import * as TypeGraphQL from "type-graphql";

export enum TokenType {
  REFRESH = "REFRESH",
  ACCESS = "ACCESS",
  VERIFICATION = "VERIFICATION",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
}
TypeGraphQL.registerEnumType(TokenType, {
  name: "TokenType",
  description: undefined,
});
