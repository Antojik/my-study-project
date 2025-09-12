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
      { path: "users", element: <UsersPage /> },
      { path: "users/:id", element: <UserPage /> },
      { path: "users/:id/posts", element: <UserPostsPage /> },
      { path: "users/:id/albums", element: <UserAlbumsPage /> },
      { path: "albums/:id/photos", element: <AlbumsPage /> },
      { path: "users/:id/todos", element: <UserTodosPage /> },
    ],
  },
]);
