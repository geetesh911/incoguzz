import React, { FC, useEffect, useState } from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { DefaultTheme } from "styled-components/native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIsTokenReceived, ThemeEnum } from "@incoguzz/redux";
import { AppNavigator } from "./AppNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { Loading } from "../Components/shared/Loading";
import AuthHelper from "../helpers/auth.helper";

interface IRoutesProps {
  theme: DefaultTheme;
}

export const Routes: FC<IRoutesProps> = ({ theme }) => {
  const dispatch = useAppDispatch();

  const isTokenReceived = useAppSelector(state => state.auth.isTokenReceived);
  const themeMode = useAppSelector(state => state.theme.theme);

  const [loadingToken, setLoadingToken] = useState<boolean>(true);

  const navigatorTheme: Theme = {
    dark: themeMode === ThemeEnum.dark,
    colors: {
      primary: theme.colors.primary,
      card: theme.objectBackgrounds.primary,
      background: theme.backgrounds.primary,
      text: theme.textColors.primary,
      border: theme.colors.primary,
      notification: theme.colors.primary,
    },
  };

  useEffect(() => {
    (async () => {
      const accessToken = await AuthHelper.getAccessToken();
      if (accessToken) {
        dispatch(setIsTokenReceived(true));
      }

      setLoadingToken(false);
    })();
  }, []);

  if (loadingToken) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={navigatorTheme}>
      {isTokenReceived ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
