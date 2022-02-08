import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {}

const initialState: IAppState = {};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
