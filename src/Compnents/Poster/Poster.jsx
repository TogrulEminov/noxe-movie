import './Poster.scss';
import { Link } from 'react-router-dom';
const Poster = ({ src, title }) => {
  return (
    <Link to="" className="poster_card">
      <img src={src} alt="poster" />
      <div className="poster_details">
        <h5 className="poster-title">
          <Link to={title}>{title}</Link>
        </h5>
        <div className="poster_genres">
          <ul>
            <li>
              <Link>action</Link>
            </li>
            <li>
              <Link>Family</Link>
            </li>
            <li>
              <Link>Triller</Link>
            </li>
          </ul>
        </div>
        <div className="watch-trailler">
          <Link to="">Watch the Trailer</Link>
        </div>
      </div>
    </Link>
  );
};

export default Poster;
