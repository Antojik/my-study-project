import { useGetUsersQuery } from "../../entities/user/api/usersApi";
import { UserCard } from "../../entities/user/UserCard";
import styles from "./UserList.module.css";

export const UserList = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isLoading) return <h1 className={styles.title}>Loading users...</h1>;
  if (isError || !users?.length)
    return <h1 className={styles.title}>No users found</h1>;

  return (
    <>
      {users.map((user) => {
        return <UserCard key={user.id} id={user.id} name={user.name} />;
      })}
    </>
  );
};
