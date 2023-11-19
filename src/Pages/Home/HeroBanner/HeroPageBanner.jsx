import { Col, Container, Row } from 'react-bootstrap';
import './HeroPageBanner.scss';
import awards from '../../../Assets/Images/bg_hero_addition.webp';
const HeroPageBanner = () => {
  return (
    <section id="hero_banner">
      <Container>
        <div className="banner_content">
          <Row>
            <Col xs={12}>
              <div className="hero_bonner_description">
                <h1>Yes! Every movie is precious.</h1>
              </div>
            </Col>
            <Col xs={12}>
              <div className="addition_awards">
                <img src={awards} alt="addtion" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HeroPageBanner;
