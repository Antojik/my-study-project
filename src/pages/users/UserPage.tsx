import { useParams } from "react-router-dom";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";
import styles from "./UserPage.module.css";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";

export const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId);

  if (isLoading) return <h1 className={styles.name}>loading User</h1>;
  if (isError || !user) return <h1 className={styles.name}>User not found</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{user.name}</h1>
      <UserTabs userId={userId} />
    </div>
  );
};
