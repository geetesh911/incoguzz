import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  username = "username",
  password = "password",
  googleUserId = "googleUserId",
  role = "role",
  accountType = "accountType",
  isVerified = "isVerified",
  verificationExpires = "verificationExpires",
  loginAttempts = "loginAttempts",
  blockExpires = "blockExpires",
  active = "active",
  lastLogin = "lastLogin",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
