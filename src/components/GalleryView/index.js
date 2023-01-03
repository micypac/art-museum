import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();

  console.log(galleryId);
  const galleryChoice = galleries.find(
    (item) => Number(galleryId) === item.galleryid
  );
  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{galleryChoice.name}</h2>
    </div>
  );
};

export default GalleryView;
