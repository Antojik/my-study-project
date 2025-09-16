import { memo } from "react";
import { CommentList } from "../../../widgets/commentList/CommentList";
import styles from "./PostCard.module.css";
import type { Comment } from "../../mocks/interfaces";
import { Link } from "react-router-dom";

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  comments?: Comment[];
}

const PostCard = ({ id, title, content, comments }: PostCardProps) => {
  return (
    <div className={styles.card}>
      <Link to={`/posts/${id}`} className={styles.title}>
        {title}
      </Link>
      <p className={styles.content}>{content}</p>
      <CommentList comments={comments || []} />
    </div>
  );
};

export const MemoizedPostCard = memo(PostCard);
