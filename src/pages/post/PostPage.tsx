import { useParams } from "react-router-dom";
import { MemoizedPostCard } from "../../entities/post/ui/PostCard";
import { useGetPostByIdQuery } from "../../entities/post/api/postsApi";
import styles from "./PostPage.module.css";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);

  if (isLoading) return <h1 className={styles.title}>Loading...</h1>;
  if (isError || !post) return <h1 className={styles.title}>No posts yet!</h1>;

  return <MemoizedPostCard id={post.id} title={post.title} body={post.body} />;
};
