import { useParams } from "react-router-dom";
import { posts } from "../../entities/mocks/postsMock";
import { MemoizedPostCard } from "../../entities/post/ui/PostCard";
import { users } from "../../entities/mocks/usersMock";
import styles from "./UserPostsPage.module.css";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const user = users.find((user) => user.id === userId);
  const userPosts = posts.filter((post) => post.userId === userId);

  if (userPosts.length === 0)
    return (
      <h1 className={styles.title}>This user haven't got any posts, yet.</h1>
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
          content={post.content}
          comments={post.comment}
        />
      ))}
    </div>
  );
};
