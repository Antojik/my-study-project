import { useParams } from "react-router-dom";
import { users } from "../../entities/mocks/usersMock";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";
import styles from "./UserPage.module.css";

export const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const user = users.find((user) => user.id === userId);
  if (!user) return <h1 className={styles.name}>User not found</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{user.name}</h1>
      <UserTabs userId={userId} />
    </div>
  );
};
