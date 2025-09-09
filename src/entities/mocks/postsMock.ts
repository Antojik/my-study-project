import type { Post } from "./interfaces";

export const posts: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "First post",
    content: "Small content of first post",
    comment: [
      { id: 1, author: "Ivan Ivanov", content: "This post is so interesting!" },
    ],
  },
  {
    id: 2,
    userId: 2,
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

  {
    id: 3,
    userId: 1,
    title: "Third post",
    content: "Small content of first post",
  },
  {
    id: 4,
    userId: 3,
    title: "Third post",
    content: "Small content of first post",
    comment: [
      { id: 1, author: "Somebody Else", content: "U have a big problems now" },
    ],
  },
];
