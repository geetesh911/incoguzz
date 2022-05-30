import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICapturedMedia } from "../interfaces";

export interface ICameraState {
  capturedMedia: ICapturedMedia[];
}

const initialState: ICameraState = {
  capturedMedia: [],
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    addCapturedMedia: (
      state: ICameraState,
      action: PayloadAction<ICapturedMedia>
    ) => {
      state.capturedMedia = [...state.capturedMedia, action.payload];
    },
  },
});

export const { addCapturedMedia } = cameraSlice.actions;

export default cameraSlice.reducer;
