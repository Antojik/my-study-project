import { Link } from "react-router-dom";
import styles from "./UserCard.module.css";

interface UserCardProps {
  id: number;
  name: string;
}

export const UserCard = ({ id, name }: UserCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>
      <Link className={styles.link} to={`/users/${id}`}>
        View Profile
      </Link>
    </div>
  );
};
