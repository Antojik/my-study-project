import { useParams } from "react-router-dom";
import { MemoizedPostCard } from "../../entities/post/ui/PostCard";
import styles from "./UserPostsPage.module.css";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";
import { useGetUserPostsQuery } from "../../entities/post/api/postsApi";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { data: userPosts, isLoading } = useGetUserPostsQuery(userId);
  const { data: user } = useGetUserByIdQuery(userId);

  if (isLoading) return <h1 className={styles.title}>Loading...</h1>;
  if (!userPosts?.length)
    return (
      <h1 className={styles.title}>This user haven't got any posts, yet!</h1>
    );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{user?.name} posts</h1>
      <UserTabs userId={userId} />
      {userPosts.map((post) => (
        <MemoizedPostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};
