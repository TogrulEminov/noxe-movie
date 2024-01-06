import './BlogCard.scss';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
const BlogCard = ({
  src,
  title,
  source,
  description,
  author,
  publishedAt,
  to,
}) => {
  return (
    <Col xl={12} lg={12} md={12}>
      <div className="blog_card">
        <figure className="blog_card_image">
          <LazyLoadImg src={src} alt={title} title={title} />
        </figure>
        <article className="blog_card_content">
          <Link to={to} target="_blank" className="blog_genres">
            {source}
          </Link>
          <h3>{title}</h3>
          <ul className="creator_date">
            <li>
              <span>by</span>
              <h6>{author}</h6>
            </li>
            <li className='last'>
              <span>{publishedAt} years ago</span>
            </li>
          </ul>
          <p>{description}</p>
        </article>
      </div>
    </Col>
  );
};

export default BlogCard;
