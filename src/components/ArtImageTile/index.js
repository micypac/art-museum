import { Link } from "react-router-dom";

const ArtImageTile = ({ art, galleryId }) => {
  console.log(art);
  return (
    <div>
      <Link to={`/galleries/${galleryId}/art/${art.id}`}>
        <img
          src={art.images[0].baseimageurl}
          alt={art.title}
          style={{ width: 200, height: 200 }}
        />
      </Link>
    </div>
  );
};

export default ArtImageTile;
