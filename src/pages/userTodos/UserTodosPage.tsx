import { useParams } from "react-router-dom";
import { todos } from "../../entities/mocks/todosMock";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";
import styles from "./UserTodosPage.module.css";

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  console.log("userId:", userId);
  console.log("todos:", todos);

  const userTodos = todos.filter((todo) => todo.userId === userId);

  if (userTodos.length === 0)
    return <h1 className={styles.name}>There is no todos</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Todos</h1>
      <UserTabs userId={userId} />
      <ul className={styles.list}>
        {userTodos.map((todo) => (
          <li key={todo.id}>
            <h1>{todo.title}</h1>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
