import styles from "./PostCard.module.css";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard = ({ title, content }: PostCardProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default PostCard;
