import "./Footer.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="row">
          <Col  className="col" md={3} xs={12}>
            <ul>
              <li>
                <Link >Pages</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Studio</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col className="col" md={3} xs={12}>
            <ul>
              <li>
                <Link>Our Studio</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Our Works</Link>
              </li>
              <li>
                <Link>Noxe Team</Link>
              </li>
              <li>
                <Link>History</Link>
              </li>
            </ul>
          </Col>
          <Col className="col" md={3} xs={12}>
            <ul>
              <li>
                <Link>Noxe Studio</Link>
              </li>
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
          </Col>
          <Col className="col" md={3} xs={12}>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
