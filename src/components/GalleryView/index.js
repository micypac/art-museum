import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();

  const galleryChoice = galleries.find(
    (item) => Number(galleryId) === item.galleryid
  );

  console.log(galleryChoice);

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{galleryChoice.name}</h2>
      {galleryChoice.objects.map((item) => (
        <Route>
          <ArtImageTile art={item} galleryId={galleryId} />
        </Route>
      ))}
    </div>
  );
};

export default GalleryView;
