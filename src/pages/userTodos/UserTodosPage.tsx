import { useParams } from "react-router-dom";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";
import styles from "./UserTodosPage.module.css";
import { useGetUserTodosByidQuery } from "../../entities/todos/api/todosApi";

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { data: userTodos, isLoading } = useGetUserTodosByidQuery(userId);

  if (isLoading) return <h1 className={styles.name}>Loading todos...</h1>;

  if (userTodos?.length === 0)
    return <h1 className={styles.name}>No todos yet</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Todos</h1>
      <UserTabs userId={userId} />
      <ul className={styles.list}>
        {userTodos?.map((todo) => (
          <li key={todo.id}>
            <h1>{todo.title}</h1>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
