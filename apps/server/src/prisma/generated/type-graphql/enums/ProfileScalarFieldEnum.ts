import * as TypeGraphQL from "type-graphql";

export enum ProfileScalarFieldEnum {
  id = "id",
  nickname = "nickname",
  bio = "bio",
  mobileNo = "mobileNo",
  country = "country",
  gender = "gender",
  dob = "dob",
  interestedIn = "interestedIn",
  relationshipStatus = "relationshipStatus",
  website = "website",
  dpUrl = "dpUrl",
  userId = "userId",
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});
