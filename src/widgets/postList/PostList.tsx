import { useCallback } from "react";
import { MemoizedPostCard } from "../../entities/post/ui/PostCard";
import { PostLengthFilter } from "../../features/postLengthFilter/ui/PostLegthFilter";
import { usePosts } from "../../features/postList/model/hooks/usePosts";
import styles from "./PostList.module.css";
import { useGetUsersQuery } from "../../entities/user/api/usersApi";

export const PostList = () => {
  const { filteredPosts, userId, setUserId, minLength, setMinLength } =
    usePosts();

  const { data: users } = useGetUsersQuery();

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
            {users?.map((user) => (
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
          body={post.body}
        />
      ))}
    </>
  );
};
