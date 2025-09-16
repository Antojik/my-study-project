import { Outlet } from "react-router-dom";
import { UserList } from "../../widgets/usersList/UserList";
import styles from "./UsersPage.module.css";

export const UsersPage = () => {
  return (
    <>
      <h1 className={styles.header}>Users Page</h1>
      <div className={styles.list}>
        <UserList />
      </div>
      <Outlet />
    </>
  );
};
