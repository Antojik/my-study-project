import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../../mocks/interfaces";
import type { RootState } from "../../../../app/providers/store/store";

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
