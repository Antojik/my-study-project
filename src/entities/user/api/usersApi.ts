import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../model/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "/users",
    }),
    getUserById: build.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
