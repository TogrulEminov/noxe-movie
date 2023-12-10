import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import './Poster.scss';
import { Link, useParams } from 'react-router-dom';
const Poster = ({ src, title, alt, genre_ids, item_id }) => {
  const { mediaType, id } = useParams();
  console.log(mediaType);
  return (
    <div className="poster_card">
     <LazyLoadImg src={src} alt={alt}/>
      <div className="poster_details">
        <h5 className="poster-title">
          <Link to=''>{title}</Link>
        </h5>
        <div className="poster_genres"></div>
        <div className="watch-trailler">
          <Link to="">Watch the Trailer</Link>
        </div>
      </div>
    </div>
  );
};

export default Poster;
