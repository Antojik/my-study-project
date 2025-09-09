import { users } from "../../entities/mocks/usersMock";
import { UserCard } from "../../entities/user/UserCard";

export const UserList = () => {
  return (
    <>
      {users.map((user) => {
        return <UserCard key={user.id} id={user.id} name={user.name} />;
      })}
    </>
  );
};
