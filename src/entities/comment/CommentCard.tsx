import type { Comment } from "../mocks";
import styles from "./CommentCard.module.css";

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className={styles.comments}>
      <i className={styles.author}>{comment.author}</i>
      <p className={styles.content}>{comment.content}</p>
    </div>
  );
};
