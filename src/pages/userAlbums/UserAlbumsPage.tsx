import { useParams, Link } from "react-router-dom";
import { users } from "../../entities/mocks/usersMock";
import { albums } from "../../entities/mocks/albumsMock";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";
import styles from "./UserAlbumsPage.module.css";

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const user = users.find((user) => user.id === userId);
  const userAlbums = albums.filter((album) => album.userId === userId);

  if (!user) return <h1>User not found</h1>;
  if (userAlbums.length === 0)
    return <h1 className={styles.name}>This user has no albums yet.</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{user.name} Albums</h1>
      <UserTabs userId={userId} />
      <div className={styles.links}>
        {userAlbums.map((album) => (
          <Link
            className={styles.link}
            key={album.id}
            to={`/albums/${album.id}/photos`}
          >
            {album.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
