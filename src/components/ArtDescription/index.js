import { Link, useParams } from "react-router-dom";

const ArtDescription = ({ gallery }) => {
  const { artId } = useParams();
  const currentArt = gallery.objects.find((item) => Number(artId) === item.id);

  return (
    <div>
      <Link to={`/galleries/${gallery.id}`}>Back to Gallery</Link>
      <h2>
        <a href={currentArt.url} target="_blank" rel="noreferrer">
          {currentArt.title}
        </a>
      </h2>

      <h3>Description: </h3>
      <p>{currentArt.description}</p>

      <h3>Credit:</h3>
      <p>{currentArt.creditline}</p>

      <h3>Technique:</h3>
      <p>{currentArt.technique}</p>

      <h3>Additional Images:</h3>
      {currentArt.images.map((image) => (
        <img
          key={image.imageid}
          src={image.baseimageurl}
          alt={image.alttext}
          style={{ width: 200, height: 200 }}
        />
      ))}
    </div>
  );
};

export default ArtDescription;
