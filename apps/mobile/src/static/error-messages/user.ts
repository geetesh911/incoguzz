import { UpdateUserInput } from "@incoguzz/graphql";
import { NestedFlags } from "../../interfaces";
import { IErrorMessage } from "./interfaces";

type IUpdateUserErrorMessages = NestedFlags<UpdateUserInput, IErrorMessage>;

export const updateUserErrorMessages: IUpdateUserErrorMessages = {
  username: { required: "Username is required" },
  profile: {
    nickname: {
      required: "Nickname is required",
      min: "Nickname must be at least 2 characters",
      max: "Nickname must be at most 255 characters",
    },
    bio: { required: "Bio is required" },
    country: { required: "Country is required" },
    dob: { required: "DOB is required" },
    gender: { required: "Gender is required" },
    interestedIn: { required: "Interested ib is required" },
    mobileNo: { required: "Mobile number is required" },
    relationshipStatus: {
      required: "Replationship status is required",
    },
    website: { required: "Website is required" },
  },
};
