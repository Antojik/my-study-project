import { useParams, Link } from "react-router-dom";
import { UserTabs } from "../../widgets/usersTabs/UsersTabs";
import styles from "./UserAlbumsPage.module.css";
import { useGetUserAlbumQuery } from "../../entities/albums/api/albumsApi";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { data: userAlbums, isLoading } = useGetUserAlbumQuery(userId);
  const { data: user, isError } = useGetUserByIdQuery(userId);

  if (isError || !user) return <h1 className={styles.name}>User not found</h1>;
  if (isLoading) return <h1 className={styles.name}>Loading albums...</h1>;
  if (userAlbums?.length === 0)
    return <h1 className={styles.name}>This user has no albums yet.</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{user.name} Albums</h1>
      <UserTabs userId={userId} />
      <div className={styles.links}>
        {userAlbums?.map((album) => (
          <Link
            className={styles.link}
            key={album.id}
            to={`/albums/${album.id}/photos`}
          >
            {album.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
