import React, { FC } from "react";
import { PageHeader } from "../../Components/shared";
import {
  EditDp,
  EditProfileForm,
  StyledProfileContainer,
} from "../../Components/user";

export const UserEditScreen: FC = () => {
  return (
    <StyledProfileContainer>
      <PageHeader text={"Edit Profile"} />
      <EditDp />
      <EditProfileForm />
    </StyledProfileContainer>
  );
};
