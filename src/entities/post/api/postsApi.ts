import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../model/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getPostById: build.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts" as const, id }],
    }),
    getUserPosts: build.query<Post[], number>({
      query: (userId) => `/posts?userId=${userId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetUserPostsQuery } =
  postsApi;
