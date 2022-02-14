import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {
  bottomSheetIds: { [key: string]: string };
}

const initialState: IAppState = {
  bottomSheetIds: {
    addPost: "addPostBottomSheet",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
