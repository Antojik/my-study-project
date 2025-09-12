import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../../../mocks/interfaces";
import type { RootState } from "../../../../app/providers/store/store";

const postsAdapter = createEntityAdapter<Post>();

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
  },
});

export const { addPost, addPosts, updatePost, removePost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

export const postsSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts
);
