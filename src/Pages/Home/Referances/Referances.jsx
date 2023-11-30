import { Col, Container, Row } from 'react-bootstrap';
import './Referances.scss';
import { Link } from 'react-router-dom';
import logo1 from '../../../Assets/Images/keller.webp';
import logo2 from '../../../Assets/Images/ellamer.webp';
import logo3 from '../../../Assets/Images/wp-content.webp';
import logo4 from '../../../Assets/Images/gallery.webp';
const Referances = () => {
  return (
    <section id="referance">
      <Container>
        <Row>
          <Col lg={3} xl={3} md={6} sm={6} xs={12}>
            <Link to="" className="referance_link">
              <img src={logo1} alt="" />
            </Link>
          </Col>
          <Col lg={3} xl={3} md={6} sm={6} xs={12}>
            <Link to="" className="referance_link">
              <img src={logo2} alt="" />
            </Link>
          </Col>
          <Col lg={3} xl={3} md={6} sm={6} xs={12}>
            <Link to="" className="referance_link">
              <img src={logo3} alt="" />
            </Link>
          </Col>
          <Col lg={3} xl={3} md={6} sm={6} xs={12}>
            <Link to="" className="referance_link">
              <img src={logo4} alt="" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Referances;
