import React from 'react';
import './BlogCard.scss';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
const BlogCard = () => {
  return (
    <Col xl={4} lg={4} md={6}>
    <div className="blog_card">
      <figure className="blog_card_image">
        <img src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/blog-12-650x430.jpg" alt="" />
      </figure>
     
      <article className='blog_card_content'>
      <Link to="" className='blog_genres'>TV Shows</Link>
        <h3>King’s Life season 1 to air on AMC later this year</h3>
        <ul className="creator_date">
          <li>
            <span>by</span>
            <a href="">John Doe</a>
          </li>
          <li>
            <span>4 years ago</span>
          </li>
          <li>
            <a href="">2 Comments</a>
          </li>
        </ul>
        <p>Exciting news for fans of King's Life as AMC announces season 1 airing later this year. Get ready for a thrilling and captivating journey into the royal world.</p>
      </article>
    </div>
    </Col>
  );
};

export default BlogCard;
