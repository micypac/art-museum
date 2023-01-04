import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      <h1>Galleries</h1>

      <NavLink exact to="/">
        Home
      </NavLink>

      {galleries.map((item) => (
        <NavLink key={item.id} to={`/galleries/${item.galleryid}`}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default GalleryNavigation;
