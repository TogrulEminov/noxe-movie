import { Link } from 'react-router-dom';
import './SliderCard.scss';
const SliderCard = () => {
  return (
        
        <div className="slider_film_card">
          <figure className="slider_film_image">
            <img
              src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/03/title-poster-14-370x545.jpg"
              alt=""
            />
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
