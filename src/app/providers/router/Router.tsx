import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { PostsPage } from "../../../pages/posts/PostsPage";
import { UsersPage } from "../../../pages/users/UsersPage";
import { PostPage } from "../../../pages/post/PostPage";
import { UserPostsPage } from "../../../pages/userPosts/UserPostsPage";
import { UserPage } from "../../../pages/users/UserPage";
import { UserAlbumsPage } from "../../../pages/userAlbums/UserAlbumsPage";
import { AlbumsPage } from "../../../pages/albums/AlbumsPage";
import { UserTodosPage } from "../../../pages/userTodos/UserTodosPage";
import { AlbumPhotosPage } from "../../../pages/photos/AlbumPhotosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "posts",
        element: <PostsPage />,
      },
      { path: "posts/:id", element: <PostPage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [
          { path: ":id", element: <UserPage /> },
          { path: ":id/posts", element: <UserPostsPage /> },
          { path: ":id/albums", element: <UserAlbumsPage /> },
          { path: ":id/todos", element: <UserTodosPage /> },
        ],
      },
      {
        path: "albums",
        element: <AlbumsPage />,
        children: [{ path: ":id/photos", element: <AlbumPhotosPage /> }],
      },
    ],
  },
]);
