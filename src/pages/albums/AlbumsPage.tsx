import { useParams } from "react-router-dom";
import { albums } from "../../entities/mocks/albumsMock";
import { photos } from "../../entities/mocks/photosMock";
import styles from "./AlbumsPage.module.css";

export const AlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);

  const album = albums.find((a) => a.id === albumId);
  const albumPhotos = photos.filter((p) => p.albumId === albumId);

  if (!album) return <h1 className={styles.name}>Album not found</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{album.name}</h1>
      <div className={styles.photos}>
        {albumPhotos.map((photo) => (
          <div key={photo.id}>
            <p className={styles.title}>{photo.title}</p>
            <img className={styles.photo} src={photo.url} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
