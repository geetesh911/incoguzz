import { LoginInput, SignUpInput } from "@incoguzz/graphql";
import { IErrorMessage } from "../../interfaces/Static.interface";

type ISignUpErrorMessages = { [Property in keyof SignUpInput]: IErrorMessage };

export const signUpErrorMessages: ISignUpErrorMessages = {
  email: { required: "Email is required" },
  nickname: { required: "Nickname is required" },
  username: { required: "Username is required" },
  password: { required: "Password is required" },
};

type ILoginErrorMessages = { [Property in keyof LoginInput]: IErrorMessage };

export const loginErrorMessages: ILoginErrorMessages = {
  emailOrUsername: { required: "Email or username is required" },
  password: { required: "Password is required" },
};
