export interface Comment {
  id: number;
  author: string;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  comment?: Comment[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "First post",
    content: "Small content of first post",
    comment: [
      { id: 1, author: "Ivan Ivanov", content: "This post is so interesting!" },
    ],
  },
  {
    id: 2,
    title: "Second post",
    content:
      "Large content of first post, large content of first post, large content of first post, large content of first post, large content of first post, large content of first post, large content of first post, large content of first post",
    comment: [
      {
        id: 1,
        author: "Ivan Ivanov",
        content:
          "This post is so interesting! This post is so interesting! This post is so interesting! This post is so interesting! ",
      },
      { id: 2, author: "Natalia Pehota", content: "I will shot now" },
    ],
  },

  { id: 3, title: "Third post", content: "Small content of first post" },
];
