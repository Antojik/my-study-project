import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/post/api/postsApi";
import { usersApi } from "../../../entities/user/api/usersApi";
import { commentsApi } from "../../../entities/comment/api/commentsApi";
import { albumsApi } from "../../../entities/albums/api/albumsApi";
import { todosApi } from "../../../entities/todos/api/todosApi";
import { postsReducer } from "../../../entities/post/model/slice/postSlice";
import { usersReducer } from "../../../entities/user/model/slice/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      postsApi.middleware,
      usersApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      todosApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
