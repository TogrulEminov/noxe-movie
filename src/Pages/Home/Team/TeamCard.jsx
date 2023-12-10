import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const TeamCard = ({ img, title, work, desc }) => {
  return (
    <Col xl={4} lg={4} md={6} sm={6}>
      <div className="teamCard">
        <figure className="team_card_image">
          <img src={img} alt={title} />
          <div className="addition">
            <p>{desc}</p>
            <ul className="social_links">
              <li>
                <Link to="">
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link to="">
                  <LinkedInIcon />
                </Link>
              </li>
              <li>
                <Link to="">
                  <TwitterIcon />
                </Link>
              </li>
            </ul>
          </div>
        </figure>
        <article className="team_card_content">
          <h3>{title}</h3>
          <h6>{work}</h6>
          <p>{desc}</p>
        </article>
      </div>
    </Col>
  );
};

export default TeamCard;
