import React, { FC } from "react";
import { Header } from "../../Components/auth/Header";
import { LoginForm } from "../../Components/auth/Login/LoginForm";
import {
  StyledAuthFormContainer,
  StyledAuthScreenContainer,
} from "../../Components/auth/styled";

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
