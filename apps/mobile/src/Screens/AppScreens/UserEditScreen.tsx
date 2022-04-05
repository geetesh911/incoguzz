import React, { FC } from "react";
import { ScreenHeader } from "../../Components/shared";
import {
  EditDp,
  EditProfileForm,
  StyledProfileContainer,
} from "../../Components/user";

export const UserEditScreen: FC = () => {
  return (
    <StyledProfileContainer>
      <ScreenHeader heading="Edit Profile" />
      <EditDp />
      <EditProfileForm />
    </StyledProfileContainer>
  );
};
