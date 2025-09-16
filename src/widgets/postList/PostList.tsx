import { useCallback, useMemo, useState } from "react";
import { posts, type Post } from "../../entities/mocks";
import { MemoizedPostCard } from "../../entities/post/ui/PostCard";
import { PostLengthFilter } from "../../features/postLengthFilter/ui/PostLegthFilter";
import { LengthFilter } from "../../features/postLengthFilter/lib/LengthFilter";

export const PostList = () => {
  const [minLength, setMinLength] = useState(0);

  const filteredPosts: Post[] = useMemo(
    () => LengthFilter(posts, minLength),
    [minLength]
  );

  const handleChange = useCallback((value: number) => {
    setMinLength(value);
  }, []);

  return (
    <div>
      <PostLengthFilter value={minLength} onChange={handleChange} />
      {filteredPosts.map((post) => (
        <MemoizedPostCard
          key={post.id}
          title={post.title}
          content={post.content}
          comments={post.comment}
        />
      ))}
    </div>
  );
};
