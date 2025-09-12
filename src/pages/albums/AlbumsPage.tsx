import { useParams } from "react-router-dom";
import styles from "./AlbumsPage.module.css";
import {
  useGetAlbumByIdQuery,
  useGetAlbumPhotosQuery,
} from "../../entities/albums/api/albumsApi";

export const AlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);

  const { data: album, isLoading } = useGetAlbumByIdQuery(albumId);
  const { data: albumPhotos } = useGetAlbumPhotosQuery(albumId);

  if (isLoading) return <h1 className={styles.title}>Loading album...</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{album?.title}</h1>
      <div className={styles.photos}>
        {albumPhotos?.map((photo) => (
          <div key={photo.id}>
            <p className={styles.title}>{photo.title}</p>
            <img
              className={styles.photo}
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
