import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Header } from "../../Components/auth/Header";
import {
  StyledAuthFormContainer,
  StyledAuthScreenContainer,
} from "../../Components/auth/styled";
import { Button } from "../../Components/form";
import { RouteNames } from "../../constants/RoutesName";
import { AuthHomeScreenNavigationProp } from "../../interfaces/Navigation.interface";

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
