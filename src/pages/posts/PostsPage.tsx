import { useEffect, useState } from "react";
import { WithLoading } from "../../shared/lib/hoc/WithLoading";
import { PostList } from "../../widgets/postList/PostList";
import styles from "./PostsPage.module.css";

export const PostsPage = () => {
  const PostListWithLoading = WithLoading(PostList);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className={styles.header}>Posts Page</h1>
      <PostListWithLoading isLoading={loading} />
    </>
  );
};
