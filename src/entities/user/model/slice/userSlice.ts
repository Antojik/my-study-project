import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../../app/providers/store/store";
import type { User } from "../types";

const usersAdapter = createEntityAdapter<User>();

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addUser: usersAdapter.addOne,
    addUsers: usersAdapter.addMany,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
  },
});

export const { addUser, addUsers, updateUser, removeUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

export const postsSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.users
);
