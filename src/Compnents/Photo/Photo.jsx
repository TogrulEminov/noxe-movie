import { Link } from 'react-router-dom';
import './Photo.scss';
import { MdFullscreen } from 'react-icons/md';
const Photo = ({ to, src, alt }) => {
  return (
    <div className="fancy-photo">
      <Link data-fancybox="gallery" to={to}>
        <img src={src} alt={alt} />
        <button className="full">
          <MdFullscreen />
        </button>
      </Link>
    </div>
  );
};

export default Photo;
