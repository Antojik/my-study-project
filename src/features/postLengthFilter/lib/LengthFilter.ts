import type { Post } from "../../../entities/mocks/interfaces";

export const LengthFilter = (posts: Post[], minLength: number) => {
  return posts.filter((post) => post.title.length >= minLength);
};
