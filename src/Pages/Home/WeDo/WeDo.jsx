import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import { Col, Container, Row } from 'react-bootstrap';
import directors from '../../../Assets/Images/directors.svg';
import production from '../../../Assets/Images/production.svg';
import studio from '../../../Assets/Images/studio.svg';
import awards from '../../../Assets/Images/awards.svg';
import './WeDo.scss';
import AdvantagesCard from '../../../Compnents/AdvantagesCard/AdvantagesCard';
const WeDo = () => {
  const advantages = [
    {
      id: 1,
      src: directors,
      title: 'Directors',
      description:
        'Our visionary directors bring stories to life with their passion, creativity, and expertise. Join us.',
    },
    {
      id: 2,
      src: production,
      title: 'Production',
      description:
        'Noxe delivers high-quality production services for film and TV projects of all genres and sizes.',
    },
    {
      id: 3,
      src: studio,
      title: 'Studio',
      description:
        ' Noxe, a movie studio that brings your imagination to life  with captivating stories and stunning visuals.',
    },
    {
      id: 4,
      src: awards,
      title: 'Awards',
      description:
        "Recognitions received by Noxe for excellence in filmmaking.Celebrating our team's hard work and creativity.",
    },
  ];
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
            {advantages?.map((item) => {
              return (
                <Col className="col-12" lg={3} md={6} key={item.id}>
                  <AdvantagesCard
                    src={item?.src}
                    title={item?.title}
                    description={item?.description}
                  />
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default WeDo;
