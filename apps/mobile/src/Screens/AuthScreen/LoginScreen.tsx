import React, { FC } from "react";
import {
  LoginForm,
  Header,
  StyledAuthFormContainer,
  StyledAuthScreenContainer,
} from "../../Components/auth";

export const LoginScreen: FC = () => {
  return (
    <StyledAuthScreenContainer>
      <Header />
      <StyledAuthFormContainer>
        <LoginForm />
      </StyledAuthFormContainer>
    </StyledAuthScreenContainer>
  );
};
