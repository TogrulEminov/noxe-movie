import React from "react";
import "./AboutTop.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AboutTop = () => {
  return (
    <section id="about-top">
      <Container>
      <Row className="row">
      <Col lg={8}>
      <h6>Fashion Holywood Film Actor</h6>
      <h1>Michelle <br />Fischer</h1>
      <p>Welcome to Michelle Fischer's official website.Explore her remarkable talent,captivating,performances,and inspiring journey as an artist.Discover the magic of storytelling through her unique perspective and creative endeavors.</p>
      </Col>
      </Row>
      </Container>
   
   
    </section>
  );
};

export default AboutTop;
