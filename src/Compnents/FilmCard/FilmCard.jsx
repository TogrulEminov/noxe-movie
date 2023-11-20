import React from 'react';
import { Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import "./FilmCard.scss"
const FilmCard = ({title,img}) => {
  return (
    <Col lg={3} xl={2} md={6} sm={6} xs={12}>
      <Link to="" className="film_single_card">
        <figure className="film_single_image">
          <LazyLoadImage
            src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-11-370x545.jpg"
            alt="film_card"
          />
        </figure>
        <figcaption className="film_single_desc">
          <Link className='film_single_title'>Darkness Lisa</Link>
          <ul className='film_single_category'>
            <li>
              <Link>Adventure</Link>
            </li>
            <li>
              <Link>Film-Noir</Link>
            </li>
            <li>
              <Link>Thriller</Link>
            </li>
          </ul>
        </figcaption>
      </Link>
    </Col>
  );
};

export default FilmCard;
