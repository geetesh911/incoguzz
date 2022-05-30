import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers";
import { appSlice } from "./reducers/app";
import { authSlice } from "./reducers/auth";
import { cameraSlice } from "./reducers/camera";
import { postSlice } from "./reducers/post";
import { themeSlice } from "./reducers/themes";

export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [appSlice.name]: appSlice.reducer,
    [postSlice.name]: postSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [cameraSlice.name]: cameraSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export * from "./hooks";
export * from "./reducers";
