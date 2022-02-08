import * as TypeGraphQL from "type-graphql";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
TypeGraphQL.registerEnumType(Gender, {
  name: "Gender",
  description: undefined,
});
