import React, { FC } from "react";
import { useMutation } from "@apollo/client";
import {
  GetUserDocument,
  UpdateUserDocument,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from "@incoguzz/graphql";
import { updateUserErrorMessages } from "../../../static";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Form, FormComponentTypes, IFormFields } from "../../form";
import { StyledEditProfileFormContainer } from "./styled";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../../../Navigation/constants";
import { UserInfoScreenNavigationProp } from "../../../Navigation/interfaces";

export const EditProfileForm: FC = () => {
  const userData = useAppSelector(state => state.user.userData);

  const navigation = useNavigation<UserInfoScreenNavigationProp>();

  const [updateUser, { loading }] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument, {
    onCompleted: () => {
      navigation.navigate(RouteNames.UserInfo);
    },
    onError: error => {
      console.log(JSON.stringify(error), error.message);
    },
    refetchQueries: [{ query: GetUserDocument }],
  });

  const initialValues: UpdateUserInput = {
    username: userData?.username,
    profile: {
      nickname: userData?.profile?.nickname,
    },
  };

  const { username, profile: profileErrorMessages } = updateUserErrorMessages;
  const { nickname } = profileErrorMessages;

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(username?.required).min(5).max(255),
    profile: Yup.object().shape({
      nickname: Yup.string()
        .required(nickname?.required)
        .min(2, nickname?.min)
        .max(255, nickname?.max),
    }),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: updateUserInput => {
      updateUser({ variables: { updateUserInput } });
    },
  });

  const formFields: IFormFields<UpdateUserInput> = [
    {
      name: "username",
      type: FormComponentTypes.Input,
      placeholder: "Username",
    },
    {
      name: "profile.nickname",
      type: FormComponentTypes.Input,
      placeholder: "Name",
    },
  ];

  return (
    <StyledEditProfileFormContainer>
      <Form formFields={formFields} formik={formik} />
      <Button
        onPress={() => formik.handleSubmit()}
        title="Update"
        isLoading={loading}
      />
    </StyledEditProfileFormContainer>
  );
};
