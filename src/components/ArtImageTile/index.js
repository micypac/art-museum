import { Link } from "react-router-dom";

const ArtImageTile = ({ art, galleryId }) => {
  return (
    <div>
      <Link to={`/galleries/${galleryId}/art/${art.id}`}>
        <img
          src={art.primaryimageurl}
          alt={art.title}
          style={{ width: 200, height: 200 }}
        />
      </Link>
    </div>
  );
};

export default ArtImageTile;
