export interface Comment {
  id: number;
  author: string;
  content: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  content: string;
  comment?: Comment[];
}

export interface Album {
  id: number;
  userId: number;
  name: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
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
