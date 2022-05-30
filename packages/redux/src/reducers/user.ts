import { UserOutput } from "@incoguzz/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  userData: UserOutput;
}

const initialState: IUserState = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (
      state: IUserState,
      action: PayloadAction<IUserState["userData"]>
    ) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
