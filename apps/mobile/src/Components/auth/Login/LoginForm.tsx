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
      // const accessToken = `136c7db60e8e9c73b9500d3d7047740d5d5917059e81fe90f0fc27c2a572d05aef5c09ae4b66b3021c0bc14c390e07d2a35d6e642216f3a6ebf424be891a493c4cb92c5515bdf87a4959d59e8cb924afa86442ea009aaf243ca9b068289c82ac66420cdd76fc3904218f17a94f834129aa340106327429ae4c8c1a03c56dbee0c01cd91b6ab8bdae8565d70e27118fb2cb342c1c54299efa74423b9508385f8c62a60190fd675730b6ba65d034b825933cc57c3dc8b922560f2b9809f8cc87f9605e105c86372c682bcd3f42ffa53660936d89712a8cfcef59ca91b95be5421760466a7d15d686abbd8e4a15a29cab10b26f3739a5602abfdb49fc9f9c8c3360fe9c0b06e37a3e2a6329b369f82157d5b6151ab54cff345f643afdbacc6b734f928180f78776dfc9b7b0ab8bb4be1d53b6a5a63067bbd9ef68293adcfeee549ae8ab46a70da64d12c49aa4`;
      // const refreshToken = `f7781ef6-5c5b-4ccd-9dc8-ecb2a3d9261b`;
      // await AuthHelper.storeTokens({
      //   accessToken,
      //   refreshToken,
      // });
      // dispatch(setIsTokenReceived(true));
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
