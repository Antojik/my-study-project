export interface Comment {
  postId: number;
  id: number;
  name: string;
  body: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comment?: Comment[];
}

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
