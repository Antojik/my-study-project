import { memo } from "react";
import { CommentList } from "../../../widgets/commentList/CommentList";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
import { useGetCommentsByPostIdQuery } from "../../comment/api/commentsApi";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard = ({ id, title, body }: PostCardProps) => {
  const { data: comments, isLoading } = useGetCommentsByPostIdQuery(id);

  return (
    <div className={styles.card}>
      <Link to={`/posts/${id}`} className={styles.title}>
        {title}
      </Link>
      <p className={styles.content}>{body}</p>
      {isLoading ? (
        <p className={styles.content}>Loading comments...</p>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};

export const MemoizedPostCard = memo(PostCard);
