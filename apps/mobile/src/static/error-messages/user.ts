import { UpdateUserInput } from "@incoguzz/graphql";
import { DotNestedKeys } from "../../interfaces";
import { IErrorMessage } from "./interfaces";

export type UpdateUserInputNestedObjectKeys = DotNestedKeys<UpdateUserInput>;

type IUpdateUserErrorMessages = Record<
  UpdateUserInputNestedObjectKeys,
  IErrorMessage
>;

export const updateUserErrorMessages: IUpdateUserErrorMessages = {
  username: { required: "Username is required" },
  "profile.nickname": {
    required: "Nickname is required",
    min: "Nickname must be at least 2 characters",
    max: "Nickname must be at most 255 characters",
  },
  "profile.bio": { required: "Bio is required" },
  "profile.country": { required: "Country is required" },
  "profile.dob": { required: "DOB is required" },
  "profile.gender": { required: "Gender is required" },
  "profile.interestedIn": { required: "Interested ib is required" },
  "profile.mobileNo": { required: "Mobile number is required" },
  "profile.relationshipStatus": {
    required: "Replationship status is required",
  },
  "profile.website": { required: "Website is required" },
};
