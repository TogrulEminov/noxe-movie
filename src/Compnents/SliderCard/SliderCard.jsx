import { Link } from 'react-router-dom';
import './SliderCard.scss';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import Genres from '../Genres/Genres';
const SliderCard = ({ title, src, genre_ids, id, className }) => {
  return (
    <div className={`slider_film_card ${className ? className : ''}`}>
      <figure className="slider_film_image">
        <LazyLoadImg src={src} alt={title} />
      </figure>
      <article className="slider_film_content">
        <h4 title={`${title}`}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h4>
        <ul className="slider_film_genres">
          <Genres data={genre_ids} />
        </ul>
      </article>
    </div>
  );
};

export default SliderCard;
