import { Link, Outlet } from "react-router-dom";
import { albums } from "../../entities/mocks/albumsMock";
import styles from "./AlbumsPage.module.css";

export const AlbumsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Albums</h1>
      <div className={styles.photos}>
        {albums.map((album) => (
          <Link
            key={album.id}
            className={styles.link}
            to={`${album.id}/photos`}
          >
            {album.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
