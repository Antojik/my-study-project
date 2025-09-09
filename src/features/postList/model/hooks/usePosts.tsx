import { useMemo, useState } from "react";
import type { Post } from "../../../../entities/mocks/interfaces";
import { posts } from "../../../../entities/mocks/postsMock";

export const usePosts = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [minLength, setMinLength] = useState(0);

  const filteredPosts: Post[] = useMemo(() => {
    return posts.filter((post) => {
      const matchesUser = userId ? post.userId === userId : true;
      const matchesLength = post.title.length >= minLength;
      return matchesUser && matchesLength;
    });
  }, [userId, minLength]);

  return { filteredPosts, userId, setUserId, minLength, setMinLength };
};
