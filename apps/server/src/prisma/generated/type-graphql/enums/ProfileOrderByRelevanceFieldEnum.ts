import * as TypeGraphQL from "type-graphql";

export enum ProfileOrderByRelevanceFieldEnum {
  id = "id",
  nickname = "nickname",
  bio = "bio",
  mobileNo = "mobileNo",
  country = "country",
  website = "website",
  dpUrl = "dpUrl",
  userId = "userId",
}
TypeGraphQL.registerEnumType(ProfileOrderByRelevanceFieldEnum, {
  name: "ProfileOrderByRelevanceFieldEnum",
  description: undefined,
});
