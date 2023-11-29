import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import { Col, Container, Row } from 'react-bootstrap';
import directors from '../../../Assets/Images/directors.svg';
import production from '../../../Assets/Images/production.svg';
import studio from '../../../Assets/Images/studio.svg';
import awards from '../../../Assets/Images/awards.svg';
import './WeDo.scss';
const WeDo = () => {
  return (
    <section id="what_we_do">
      <SectionTitle
        headingTop="Creating Cinematic Magic"
        headingCenter="What We Do?"
        pharagraph="At Noxe, we are a movie 
        company dedicated to creating
         captivating stories that transport
          you to new worlds. From ideation to
         production, our team of experts 
         ensures that every aspect of filmmaking 
         is executed with precision and passion. 
         Join us on our journey to bring cinematic 
         magic to life."
      />
      <Container>
        <section className="service_boxes">
          <Row>
            <Col className="col-12" lg={3} md={6}>
              <div className="service_item">
                <figure>
                  <img src={directors} alt="" />
                </figure>
                <article>
                  <h3>Directors</h3>
                  <p>
                    Our visionary directors bring stories to life with their
                    passion, creativity, and expertise. Join us.
                  </p>
                </article>
              </div>
            </Col>
            <Col className="col-12" lg={3} md={6}>
              <div className="service_item">
                <figure>
                  <img src={production} alt="" />
                </figure>
                <article>
                  <h3>Production</h3>
                  <p>
                  Noxe delivers high-quality production services for film and TV projects of all genres and sizes.   </p>
                </article>
              </div>
            </Col>
            <Col className="col-12" lg={3} md={6}>
              <div className="service_item">
                <figure>
                  <img src={studio} alt="" />
                </figure>
                <article>
                  <h3>Studio</h3>
                  <p>
                    Noxe, a movie studio that brings your imagination to life
                    with captivating stories and stunning visuals.{' '}
                  </p>
                </article>
              </div>
            </Col>
            <Col className="col-12" lg={3} md={6}>
              <div className="service_item">
                <figure>
                  <img src={awards} alt="" />
                </figure>
                <article>
                  <h3>Awards</h3>
                  <p>
                    Recognitions received by Noxe for excellence in filmmaking.
                    Celebrating our team's hard work and creativity.{' '}
                  </p>
                </article>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default WeDo;
