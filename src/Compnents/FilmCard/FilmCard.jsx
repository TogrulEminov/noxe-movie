import React from 'react';
import { Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './FilmCard.scss';
const FilmCard = ({ title, img }) => {
  return (
    <Col lg={3} xl={2} md={6} sm={6} xs={12}>
      <div to="" className="film_single_card">
        <figure className="film_single_image">
          <LazyLoadImage src={img} alt="film_card" />
        </figure>
        <div className="film_single_desc">
          <Link to="" className="film_single_title">
            {title}
          </Link>
          <ul className="film_single_category"></ul>
        </div>
      </div>
    </Col>
  );
};

export default FilmCard;
