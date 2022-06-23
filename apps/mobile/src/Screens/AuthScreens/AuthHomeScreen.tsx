import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  Header,
  StyledAuthFormContainer,
  StyledAuthScreenContainer,
} from "../../Components/auth";
import { Button } from "../../Components/form";
import { RouteNames } from "../../Navigation/constants";
import { AuthHomeScreenNavigationProp } from "../../Navigation/interfaces";

export const AuthHomeScreen: FC = () => {
  const navigation = useNavigation<AuthHomeScreenNavigationProp>();
  return (
    <StyledAuthScreenContainer>
      <Header />
      <StyledAuthFormContainer>
        <Button
          onPress={() => navigation.navigate(RouteNames.SignUp)}
          title="Create Account"
        />
        <Button
          onPress={() => navigation.navigate(RouteNames.Login)}
          title="Login"
          color={"secondary"}
        />
      </StyledAuthFormContainer>
    </StyledAuthScreenContainer>
  );
};
