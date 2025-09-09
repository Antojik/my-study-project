import { NavLink } from "react-router-dom";
import styles from "./UsersTabs.module.css";

interface UsersTabsProps {
  userId: number;
}

export const UserTabs = ({ userId }: UsersTabsProps) => {
  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
        to={`/users/${userId}/posts`}
      >
        Posts
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
        to={`/users/${userId}/albums`}
      >
        Albums
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
        to={`/users/${userId}/todos`}
      >
        Todos
      </NavLink>
    </div>
  );
};
