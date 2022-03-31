import React, { FC } from "react";
import { View } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  LoginDocument,
  LoginInput,
  LoginMutation,
  LoginMutationVariables,
} from "@incoguzz/graphql";
import { setIsTokenReceived } from "@incoguzz/redux";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { Form } from "../../form/Form";
import {
  Button,
  TextButton,
  FormComponentTypes,
  IFormFields,
} from "../../form";
import { loginErrorMessages } from "../../../static/error-messages/auth";
import { RouteNames } from "../../../Navigation/constants";
import { LoginScreenNavigationProp } from "../../../Navigation/interfaces";
import { AuthHelper } from "../helper";
import {
  StyledAuthNavigationMessage,
  StyledAuthNavigationMessageContainer,
} from "../styled";
import { useAppDispatch } from "../../../redux/hooks";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GoogleButton } from "./GoogleButton";

export const LoginForm: FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useAppDispatch();

  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "297953034597-hisffma4vosu5a2kjhml2ge091vq9lqn.apps.googleusercontent.com",
    offlineAccess: true,
    hostedDomain: "",
    forceCodeForRefreshToken: true,
    accountName: "",
    googleServicePlistPath: "",
    openIdRealm: "",
    profileImageSize: 120,
  });

  const [login, { loading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LoginDocument, {
    onCompleted: async ({ login: loginResponse }) => {
      await AuthHelper.storeTokens({
        accessToken: loginResponse.accessToken,
        refreshToken: loginResponse.refreshToken,
      });
      dispatch(setIsTokenReceived(true));
    },
    onError: error => {
      console.log(error.message);
    },
  });

  const initialValues: LoginInput = {
    emailOrUsername: "",
    password: "",
  };

  const { emailOrUsername, password } = loginErrorMessages;

  const validationSchema = Yup.object().shape({
    emailOrUsername: Yup.string()
      .required(emailOrUsername.required)
      .min(3)
      .max(255),
    password: Yup.string().required(password.required).min(4).max(255),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async loginInput => {
      login({ variables: { loginInput } });
    },
  });

  const formFields: IFormFields<LoginInput> = [
    {
      name: "emailOrUsername",
      type: FormComponentTypes.Input,
      placeholder: "Email or Username",
    },
    {
      name: "password",
      type: FormComponentTypes.PasswordInput,
      placeholder: "Password",
    },
  ];

  const googleSignIn = async () => {
    const userInfo = await GoogleSignin.signIn();
    console.log("userInfo", userInfo);
  };
  return (
    <View>
      <Form formFields={formFields} formik={formik} />
      <Button
        onPress={() => formik.handleSubmit()}
        title="Login"
        isLoading={loading}
      />
      <GoogleButton onPress={() => googleSignIn()} isLoading={loading} />
      <StyledAuthNavigationMessageContainer>
        <StyledAuthNavigationMessage>
          Don't have an account?
        </StyledAuthNavigationMessage>
        <TextButton
          title="Sign Up"
          onPress={() => navigation.navigate(RouteNames.SignUp)}
        />
      </StyledAuthNavigationMessageContainer>
    </View>
  );
};
