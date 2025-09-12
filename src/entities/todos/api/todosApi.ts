import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "../../mocks/interfaces";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getUserTodosByid: build.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
    }),
  }),
});

export const { useGetUserTodosByidQuery } = todosApi;
