import { useCallback } from "react";
import { MemoizedPostCard } from "../../entities/post/ui/PostCard";
import { PostLengthFilter } from "../../features/postLengthFilter/ui/PostLegthFilter";
import { usePosts } from "../../features/postList/model/hooks/usePosts";
import { users } from "../../entities/mocks/usersMock";
import styles from "./PostList.module.css";

export const PostList = () => {
  const { filteredPosts, userId, setUserId, minLength, setMinLength } =
    usePosts();

  const handleMinLengthChange = useCallback(
    (value: number) => setMinLength(value),
    [setMinLength]
  );

  const handleUserChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setUserId(e.target.value ? Number(e.target.value) : null),
    [setUserId]
  );

  return (
    <>
      <div className={styles.filters}>
        <PostLengthFilter value={minLength} onChange={handleMinLengthChange} />
        <div className={styles.selector}>
          Filter by user:
          <select value={userId ?? ""} onChange={handleUserChange}>
            <option value="">All users</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredPosts.map((post) => (
        <MemoizedPostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          comments={post.comment}
        />
      ))}
    </>
  );
};
