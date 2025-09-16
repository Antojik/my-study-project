import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album } from "../model/types";
import type { Photo } from "../../photos/model/types";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getUserAlbum: build.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
    }),
    getAlbumById: build.query<Album, number>({
      query: (albumId) => `albums/${albumId}`,
    }),
    getAlbumPhotos: build.query<Photo[], number>({
      query: (albumId) => `photos?albumId=${albumId}`,
    }),
  }),
});

export const {
  useGetUserAlbumQuery,
  useGetAlbumByIdQuery,
  useGetAlbumPhotosQuery,
} = albumsApi;
