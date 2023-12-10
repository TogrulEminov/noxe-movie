import { Link } from 'react-router-dom';
import './SliderCard.scss';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
const SliderCard = ({title,src}) => {
  return (
        
        <div className="slider_film_card">
          <figure className="slider_film_image">
          <LazyLoadImg src={src} alt={title}/>
          </figure>
          <article className="slider_film_content">
            <h4 title="dragon">Dragon’s Daughter</h4>
            <ul className="slider_film_genres">
              <li>
                <Link to="">Comedy</Link>
              </li>
              <li>
                <Link to="">Music</Link>
              </li>
              <li>
                <Link to="">Musical</Link>
              </li>
            </ul>
          </article>
        </div>
     
  );
};

export default SliderCard;
