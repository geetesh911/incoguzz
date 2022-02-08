import * as TypeGraphQL from "type-graphql";

export enum PlaceScalarFieldEnum {
  id = "id",
  name = "name",
  address = "address",
}
TypeGraphQL.registerEnumType(PlaceScalarFieldEnum, {
  name: "PlaceScalarFieldEnum",
  description: undefined,
});
