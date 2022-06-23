import React, { FC } from "react";
import {
  Header,
  SignUpForm,
  StyledAuthScreenContainer,
} from "../../Components/auth";

export const SignUpScreen: FC = () => {
  return (
    <StyledAuthScreenContainer>
      <Header />
      <SignUpForm />
    </StyledAuthScreenContainer>
  );
};
