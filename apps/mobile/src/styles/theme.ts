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
    light: string;
    secondary: string;
    overlay: string;
    overlayBg: string;
    contentLoader: string;
  }

  export interface HoverColors {
    primary: string;
    secondary: string;
    error: string;
    light: string;
  }
  export interface Colors {
    primary: string;
    secondary: string;
    error: string;
    inactive: string;
  }

  export interface DefaultTheme {
    commonConstants: CommonConstants;
    backgrounds: Backgrounds;
    fontFamily: FontFamily;
    objectBackgrounds: ObjectBackgrounds;
    colors: Colors;
    hoverColors: HoverColors;
    textColors: Colors;
  }
}

type Themes = { [key in ThemeEnum]: DefaultTheme };

export const dark: DefaultTheme = {
  commonConstants: {
    borderRadius: "50px",
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
    light: "#404040",
    secondary: "#FFFFFF",
    overlay: "rgba(0, 0, 0, 0.85)",
    overlayBg: "rgba(0, 0, 0, 0.5)",
    contentLoader: "#1a1a1a",
  },
  colors: {
    primary: "#00DD88",
    secondary: "#3f3f46",
    error: "#DD4A48",
    inactive: "#999999",
  },
  hoverColors: {
    primary: "#00b36e",
    light: "#8c8c8c",
    secondary: "#303036",
    error: "#D72A28",
  },
  textColors: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    error: "#FFFFFF",
    inactive: "#999999",
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
    light: "#FFFFFF",
    secondary: "#262626",
    overlay: "rgba(0, 0, 0, 0.7)",
    overlayBg: "rgba(0, 0, 0, 0.5)",
    contentLoader: "#d9d9d9",
  },
  colors: {
    primary: "#00DD88",
    secondary: "#3f3f46",
    error: "#DD4A48",
    inactive: "#999999",
  },
  hoverColors: {
    primary: "#00b36e",
    light: "#f2f2f2",
    secondary: "#303036",
    error: "#D72A28",
  },
  textColors: {
    primary: "#262626",
    secondary: "#FFFFFF",
    error: "#FFFFFF",
    inactive: "#999999",
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
