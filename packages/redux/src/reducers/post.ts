import { GetPostsOutput, PostType } from "@incoguzz/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPostState {
  selectedPosts: GetPostsOutput[];
  postUrl: string[];
  postText: string;
  postType: PostType | null;
}

const initialState: IPostState = {
  selectedPosts: [],
  postUrl: [],
  postText: "",
  postType: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSelectedPost: (
      state: IPostState,
      action: PayloadAction<IPostState["selectedPosts"]>
    ) => {
      state.selectedPosts = action.payload;
    },
    setPostUrl: (
      state: IPostState,
      action: PayloadAction<IPostState["postUrl"]>
    ) => {
      state.postUrl = action.payload;
    },
    setPostText: (
      state: IPostState,
      action: PayloadAction<IPostState["postText"]>
    ) => {
      state.postText = action.payload;
    },
    setPostType: (
      state: IPostState,
      action: PayloadAction<IPostState["postType"]>
    ) => {
      state.postType = action.payload;
    },
    clearPostUploadData: (state: IPostState) => {
      state.postType = null;
      state.postText = "";
      state.postUrl = [];
    },
  },
});

export const {
  setSelectedPost,
  setPostUrl,
  setPostText,
  setPostType,
  clearPostUploadData,
} = postSlice.actions;

export default postSlice.reducer;
