import { NavLink } from "react-router-dom";
import "./PhotoGalleryCard.css";

type PhotoGalleryCardProps = {
  path: string;
  title: string;
};
function PhotoGalleryCard({ path, title }: PhotoGalleryCardProps) {
  return (
    <NavLink className='photo-gallery-card' to={`gallery/${title}`}>
      <div className='image-container'>
        <img src={path} alt={title} />
        <div className='image-text'>
          <h5>{title}</h5>
        </div>
      </div>
    </NavLink>
  );
}

export default PhotoGalleryCard;
