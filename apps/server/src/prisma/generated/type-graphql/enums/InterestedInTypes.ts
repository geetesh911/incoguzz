import * as TypeGraphQL from "type-graphql";

export enum InterestedInTypes {
  MEN = "MEN",
  FEMALE = "FEMALE",
}
TypeGraphQL.registerEnumType(InterestedInTypes, {
  name: "InterestedInTypes",
  description: undefined,
});
