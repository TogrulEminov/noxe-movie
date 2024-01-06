import { Link } from 'react-router-dom';
import './BlogsMovie.scss';
import Genres from '../Genres/Genres';
import StarRating from '../StarRating/StarRating';
import { Col } from 'react-bootstrap';
const BlogsMovie = ({ genres_ids, stars, title, src, id }) => {
  return (
    <Col xs={12} md={6} lg={12}>
      <div className="blog_movie_card">
        <figure>
          <img src={src} alt={title} />
        </figure>
        <article>
          <h3>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h3>
          <ul className="blog_movie_list">
            <li>
              <Genres data={genres_ids} />
            </li>
            <li>
              <StarRating stars={stars} />
            </li>
          </ul>
        </article>
      </div>
    </Col>
  );
};

export default BlogsMovie;
