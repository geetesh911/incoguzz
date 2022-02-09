import React, { FC } from "react";
import { StatusBar } from "native-base";
import { ThemeProvider } from "styled-components/native";
import { useTheme } from "./theme";
import { useAppSelector } from "../redux/hooks";
import { ThemeEnum } from "@incoguzz/redux";

export const ThemeManager: FC = ({ children }) => {
  const themeMode = useAppSelector(state => state.theme.theme);

  const theme = useTheme();

  const statusBarStyle =
    themeMode === ThemeEnum.light ? "dark-content" : "light-content";

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={theme.backgrounds.primary}
      />
      {children}
    </ThemeProvider>
  );
};
