import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  bottomSheetIds: { [key: string]: string };
  videoPlayerState: { [key: string]: any };
  hideBottomMenu: boolean;
}

const initialState: IAppState = {
  bottomSheetIds: {
    addPost: "addPostBottomSheet",
    caption: "caption",
  },
  videoPlayerState: {},
  hideBottomMenu: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setVideoPlayerState: (
      state: IAppState,
      action: PayloadAction<IAppState["videoPlayerState"]>
    ) => {
      state.videoPlayerState = action.payload;
    },
    setHideBottomMenu: (state: IAppState, action: PayloadAction<boolean>) => {
      state.hideBottomMenu = action.payload;
    },
  },
});

export const { setVideoPlayerState, setHideBottomMenu } = appSlice.actions;

export default appSlice.reducer;
