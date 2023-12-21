import useFetch from '../../hooks/useFetch';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import './Poster.scss';
import { Link } from 'react-router-dom';
const Poster = ({ src, title, alt, genre_ids, item_id }) => {
  const movie_id = item_id;
  return (
    <div className="poster_card">
      <LazyLoadImg src={src} alt={alt} />
      <div className="poster_details">
        <h5 className="poster-title">
          <Link to={`/movie/${movie_id}`}>{title}</Link>
        </h5>
        <div className="poster_genres"></div>
        <div className="watch-trailler">
          <Link to={`/movie/${movie_id}`}>Watch the Trailer</Link>
        </div>
      </div>
    </div>
  );
};

export default Poster;
