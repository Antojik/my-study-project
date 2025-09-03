import { memo } from "react";
import CommentList from "../../../widgets/commentList/CommentList";
import type { Comment } from "../../mocks";
import styles from "./PostCard.module.css";

interface PostCardProps {
  title: string;
  content: string;
  comments?: Comment[];
}

const PostCard = ({ title, content, comments }: PostCardProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
      <CommentList comments={comments || []} />
    </div>
  );
};

export default memo(PostCard);
