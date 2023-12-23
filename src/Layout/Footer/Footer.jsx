import './Footer.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row className="row">
          <Col xl={3} lg={3} md={6} sm={6} xs={12}>
            <div className="footer_content">
              <div className="footer_articles">
                <h3>Pages</h3>
                <ul className="footer_list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/film">Film studio</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} sm={6} md={6} xs={12}>
            <div className="footer_content">
              <div className="footer_articles">
                <h3>Our Studio</h3>
                <ul>
                  <li>
                    <Link to="/">Movies</Link>
                  </li>
                  <li>
                    <Link to="/">Tv Shows</Link>
                  </li>
                  <li>
                    <Link to="/celebs">Celebs</Link>
                  </li> 
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} md={6} sm={6} xs={12}>
            <div className="footer_content">
              <div className="footer_articles">
                <h3>Noxe Studio</h3>
                <ul>
                  <li>
                    <Link>The Noxe Film Studio</Link>
                  </li>
                  <li>
                    <Link>1418 Noxe Street,Suite 3445</Link>
                  </li>
                  <li>
                    <Link>Colifornia,USA</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} md={6} sm={6} xs={12}>
            <div className="footer_content">
              <div className="footer_articles">
                <h3>Social</h3>
                <ul className="icons">
                  <li>
                    <Link>
                      <FaInstagram className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaSpotify className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaFacebookF className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaLinkedin className="icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
