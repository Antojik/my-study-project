import { useMemo, useState } from "react";

import { useGetPostsQuery } from "../../../../entities/post/api/postsApi";
import type { Post } from "../../../../entities/post/model/types";

export const usePosts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  const [userId, setUserId] = useState<number | null>(null);
  const [minLength, setMinLength] = useState(0);

  const filteredPosts: Post[] = useMemo(() => {
    return posts
      ? posts.filter((post) => {
          const matchesUser = userId ? post.userId === userId : true;
          const matchesLength = post.title.length >= minLength;
          return matchesUser && matchesLength;
        })
      : [];
  }, [posts, userId, minLength]);

  return {
    filteredPosts,
    userId,
    setUserId,
    minLength,
    setMinLength,
    isLoading,
  };
};
