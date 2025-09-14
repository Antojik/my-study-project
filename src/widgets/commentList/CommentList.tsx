import { useCallback, useState } from "react";
import type { Comment } from "../../entities/mocks";
import styles from "./CommentList.module.css";
import { CommentCard } from "../../entities/comment/CommentCard";

interface CommentListProps {
  comments?: Comment[];
}

export const CommentList = ({ comments = [] }: CommentListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComment = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  if (comments.length === 0)
    return (
      <div className={styles.comments}>
        <b className={styles.comment_empty}>No comments yet!</b>
      </div>
    );
  return (
    <>
      <div>
        <div className={styles.button} onClick={toggleComment}>
          {isOpen ? "Hide comments" : "Show comments"}
        </div>
      </div>
      {isOpen && (
        <>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </>
  );
};
