import "./AboutTrailer.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import trailler1 from "../../../Assets/Images/trailler1.webp";
import trailler2 from "../../../Assets/Images/trailler2.webp";
import trailler3 from "../../../Assets/Images/trailler3.webp";
const AboutTrailer = () => {
  return (
    <>
      <section id="about-trailler">
        <Row className="about-trailler">
          <Col xs={12} md={6}>
            <img src={trailler1} alt="" />
          </Col>
          <Col xs={12} md={6}>
          <img src={trailler2} alt="" /></Col>
          <Col xs={12} md={6}>
            <img src={trailler3} alt="" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutTrailer;
