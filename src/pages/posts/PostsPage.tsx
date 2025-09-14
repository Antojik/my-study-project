import { useEffect, useState } from "react";
import styles from "./PostsPage.module.css";
import { PostListWithLoading } from "../../widgets/postList/PostListWithLoading";

export const PostsPage = () => {
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
