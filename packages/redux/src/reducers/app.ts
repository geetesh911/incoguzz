import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  bottomSheetIds: { [key: string]: string };
  videoPlayerState: { [key: string]: any };
}

const initialState: IAppState = {
  bottomSheetIds: {
    addPost: "addPostBottomSheet",
    caption: "caption",
  },
  videoPlayerState: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setVideoPlayerState: (
      state,
      action: PayloadAction<IAppState["videoPlayerState"]>
    ) => {
      state.videoPlayerState = action.payload;
    },
  },
});

export const { setVideoPlayerState } = appSlice.actions;

export default appSlice.reducer;
