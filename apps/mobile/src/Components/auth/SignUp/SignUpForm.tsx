import React, { FC } from "react";
import { View } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  SignUpDocument,
  SignUpInput,
  SignUpMutation,
  SignUpMutationVariables,
} from "@incoguzz/graphql";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import {
  FormComponentTypes,
  IFormFields,
  Button,
  TextButton,
  Form,
} from "../../form";
import { signUpErrorMessages } from "../../../static/error-messages/auth";
import { RouteNames } from "../../../Navigation/constants";
import { SignUpScreenNavigationProp } from "../../../Navigation/interfaces";
import {
  StyledAuthNavigationMessage,
  StyledAuthNavigationMessageContainer,
} from "../styled";

export const SignUpForm: FC = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [signUp, { loading }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SignUpDocument, {
    onCompleted: ({ signUp: signUpResoponse }) => {
      navigation.navigate(RouteNames.User);
    },
    onError: error => {
      console.log(error.message);
    },
  });

  const initialValues: SignUpInput = {
    email: "",
    nickname: "",
    username: "",
    password: "",
  };

  const { email, nickname, username, password } = signUpErrorMessages;

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(email.required).min(7).max(255),
    nickname: Yup.string().required(nickname.required).min(2).max(255),
    username: Yup.string().required(username.required).min(3).max(255),
    password: Yup.string().required(password.required).min(6).max(255),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: signUpInput => {
      signUp({ variables: { signUpInput } });
    },
  });

  const formFields: IFormFields<SignUpInput> = [
    {
      name: "email",
      type: FormComponentTypes.Input,
      placeholder: "Email",
    },
    {
      name: "nickname",
      type: FormComponentTypes.Input,
      placeholder: "Nickname",
    },
    {
      name: "username",
      type: FormComponentTypes.Input,
      placeholder: "Username",
    },
    {
      name: "password",
      type: FormComponentTypes.PasswordInput,
      placeholder: "Password",
    },
  ];
  return (
    <View>
      <Form formFields={formFields} formik={formik} />
      <Button
        onPress={() => formik.handleSubmit()}
        title="Create account"
        isLoading={loading}
      />
      <StyledAuthNavigationMessageContainer>
        <StyledAuthNavigationMessage>
          Already have an account?
        </StyledAuthNavigationMessage>
        <TextButton
          title="Login"
          onPress={() => navigation.navigate(RouteNames.Login)}
        />
      </StyledAuthNavigationMessageContainer>
    </View>
  );
};
