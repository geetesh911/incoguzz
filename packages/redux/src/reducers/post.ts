import { GetAllPostsOutput } from "@incoguzz/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPostState {
  selectedPost: GetAllPostsOutput | null;
}

const initialState: IPostState = {
  selectedPost: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSelectedPost: (
      state,
      action: PayloadAction<IPostState["selectedPost"]>
    ) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setSelectedPost } = postSlice.actions;

export default postSlice.reducer;
