import React, { FC } from "react";
import { Header } from "../../Components/auth/Header";
import { SignUpForm } from "../../Components/auth/SignUp/SignUpForm";
import { StyledAuthScreenContainer } from "../../Components/auth/styled";

export const SignUpScreen: FC = () => {
  return (
    <StyledAuthScreenContainer>
      <Header />
      <SignUpForm />
    </StyledAuthScreenContainer>
  );
};
