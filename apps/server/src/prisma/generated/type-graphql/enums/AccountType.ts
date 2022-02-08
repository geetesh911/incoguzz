import * as TypeGraphQL from "type-graphql";

export enum AccountType {
  PUBLIC = "PUBLIC",
  ANONYMOUS = "ANONYMOUS",
  PRIVATE = "PRIVATE",
}
TypeGraphQL.registerEnumType(AccountType, {
  name: "AccountType",
  description: undefined,
});
