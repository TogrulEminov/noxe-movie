import { Link } from 'react-router-dom';
import './SliderCard.scss';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import Genres from '../Genres/Genres';
import { useSelector } from 'react-redux';
const SliderCard = ({ title, src, genre_ids, id, className, name }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div
      className={`slider_film_card ${className ? className : ''}`}
      data-theme={theme}>
      <figure className="slider_film_image">
        <LazyLoadImg src={src} alt={title} />
      </figure>
      <article className="slider_film_content">
        <h4 title={`${title || name}`}>
          <Link to={`/movie/${id}`}>{title || name}</Link>
        </h4>
        <ul className="slider_film_genres">
          <Genres data={genre_ids} />
        </ul>
      </article>
    </div>
  );
};

export default SliderCard;
