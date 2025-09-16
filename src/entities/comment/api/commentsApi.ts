import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "../model/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getCommentsByPostId: build.query<Comment[], number>({
      query: (postId) => `/comments?postId=${postId}`,
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
