import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICapturedMedia } from "../interfaces";

export interface ICameraState {
  capturedMedia: ICapturedMedia;
}

const initialState: ICameraState = {
  capturedMedia: undefined,
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCapturedMedia: (
      state: ICameraState,
      action: PayloadAction<ICapturedMedia>
    ) => {
      state.capturedMedia = action.payload;
    },
  },
});

export const { setCapturedMedia } = cameraSlice.actions;

export default cameraSlice.reducer;
