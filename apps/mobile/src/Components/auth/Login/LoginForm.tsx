import React, { FC } from "react";
import { Text, View } from "react-native";
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
import { IFormFields } from "../../../interfaces/Form.interface";
import { FormComponentTypes } from "../../../constants/Form";
import { Form } from "../../form/Form";
import { Button, TextButton } from "../../form";
import { loginErrorMessages } from "../../../static/error-messages/auth";
import { RouteNames } from "../../../constants/RoutesName";
import { LoginScreenNavigationProp } from "../../../interfaces/Navigation.interface";
import AuthHelper from "../../../helpers/auth.helper";
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
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], // [Android] what API you want to access on behalf of the user, default is email and profile
    webClientId:
      "297953034597-hisffma4vosu5a2kjhml2ge091vq9lqn.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: "", // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: "", // [Android] specifies an account name on the device that should be used
    googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
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
    onSubmit: loginInput => {
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
