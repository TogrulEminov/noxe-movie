import { Col, Container, Row } from 'react-bootstrap';
import './Referances.scss';
import logo1 from '../../../Assets/Images/keller.webp';
import logo2 from '../../../Assets/Images/ellamer.webp';
import logo3 from '../../../Assets/Images/wp-content.webp';
import logo4 from '../../../Assets/Images/gallery.webp';
import ReferanceLogo from '../../../Compnents/ReferanceLogo/ReferanceLogo';
const Referances = () => {
  const referance = [
    { id: 1, image: logo1 },
    { id: 2, image: logo2 },
    { id: 3, image: logo3 },
    { id: 4, image: logo4 },
  ];
  return (
    <section id="referance">
      <Container>
        <Row>
          {referance?.map((item) => {
            return (
              <Col lg={3} xl={3} md={6} sm={6} xs={12} key={item?.id}>
                <ReferanceLogo src={item?.image} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Referances;
