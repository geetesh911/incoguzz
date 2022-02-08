import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isTokenReceived: boolean;
}

const initialState: IAuthState = {
  isTokenReceived: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsTokenReceived: (state, action: PayloadAction<boolean>) => {
      state.isTokenReceived = action.payload;
    },
  },
});

export const { setIsTokenReceived } = authSlice.actions;

export default authSlice.reducer;
