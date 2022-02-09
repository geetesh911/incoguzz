import { store, ThemeEnum } from "@incoguzz/redux";
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface CommonConstants {
    borderRadius: string;
    placeholderTextColor: string;
  }

  export interface Backgrounds {
    primary: string;
  }

  export interface FontFamily {
    primary: string;
    heading: string;
  }

  export interface ObjectBackgrounds {
    primary: string;
    secondary: string;
  }

  export interface Colors {
    primary: string;
    secondary: string;
    error: string;
  }

  export interface DefaultTheme {
    commonConstants: CommonConstants;
    backgrounds: Backgrounds;
    fontFamily: FontFamily;
    objectBackgrounds: ObjectBackgrounds;
    colors: Colors;
    hoverColors: Colors;
    textColors: Colors;
  }
}

type Themes = { [key in ThemeEnum]: DefaultTheme };

export const dark: DefaultTheme = {
  commonConstants: {
    borderRadius: "40px",
    placeholderTextColor: "rgba(256, 256, 256, 0.5)",
  },
  backgrounds: {
    primary: "#000000",
  },
  fontFamily: {
    primary: "Inter-Medium",
    heading: "CHANEY-Regular",
  },
  objectBackgrounds: {
    primary: "#262626",
    secondary: "#FFFFFF",
  },
  colors: {
    primary: "#FBB034",
    secondary: "#3f3f46",
    error: "#DD4A48",
  },
  hoverColors: {
    primary: "#FAA61E",
    secondary: "#303036",
    error: "#D72A28",
  },
  textColors: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    error: "#FFFFFF",
  },
};

export const light: DefaultTheme = {
  commonConstants: {
    borderRadius: "40px",
    placeholderTextColor: "rgba(0, 0, 0, 0.4)",
  },
  backgrounds: {
    primary: "#FFFFFF",
  },
  fontFamily: {
    primary: "Inter-Medium",
    heading: "CHANEY-Regular",
  },
  objectBackgrounds: {
    primary: "#EAEAEA",
    secondary: "#262626",
  },
  colors: {
    primary: "#FBB034",
    secondary: "#3f3f46",
    error: "#DD4A48",
  },
  hoverColors: {
    primary: "#FAA61E",
    secondary: "#303036",
    error: "#D72A28",
  },
  textColors: {
    primary: "#262626",
    secondary: "#FFFFFF",
    error: "#FFFFFF",
  },
};

export const themes: Themes = {
  dark,
  light,
};

export const useTheme = () => {
  const themeMode = store.getState().theme.theme;
  return themes[themeMode];
};

type Theme = typeof dark;

export interface CustomThemeProps {
  theme?: Theme;
}
