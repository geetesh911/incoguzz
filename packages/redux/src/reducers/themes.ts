import { createSlice } from "@reduxjs/toolkit";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface IThemeState {
  theme: ThemeEnum;
}

const initialState: IThemeState = {
  theme: ThemeEnum.dark,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: IThemeState) => {
      state.theme =
        state.theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
