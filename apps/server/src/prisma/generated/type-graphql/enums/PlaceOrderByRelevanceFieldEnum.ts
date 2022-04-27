import * as TypeGraphQL from "type-graphql";

export enum PlaceOrderByRelevanceFieldEnum {
  id = "id",
  name = "name",
  address = "address",
}
TypeGraphQL.registerEnumType(PlaceOrderByRelevanceFieldEnum, {
  name: "PlaceOrderByRelevanceFieldEnum",
  description: undefined,
});
