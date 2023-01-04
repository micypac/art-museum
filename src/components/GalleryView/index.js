import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();

  const galleryChoice = galleries.find(
    (item) => Number(galleryId) === item.galleryid
  );

  // console.log(galleryChoice);

  return (
    <div>
      <h1>{galleryChoice.name}</h1>

      <Route exact path="/galleries/:galleryId">
        {galleryChoice.objects.map((item) => (
          <ArtImageTile key={item.id} art={item} galleryId={galleryId} />
        ))}
      </Route>

      <Route exact path="/galleries/:galleryId/art/:artId">
        <ArtDescription gallery={galleryChoice} />
      </Route>
    </div>
  );
};

export default GalleryView;
