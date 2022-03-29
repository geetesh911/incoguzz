import { GetAllPostsOutput } from "@incoguzz/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPostState {
  selectedPosts: GetAllPostsOutput[];
}

const initialState: IPostState = {
  selectedPosts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSelectedPost: (
      state,
      action: PayloadAction<IPostState["selectedPosts"]>
    ) => {
      state.selectedPosts = action.payload;
    },
  },
});

export const { setSelectedPost } = postSlice.actions;

export default postSlice.reducer;
