import './AboutPower.scss';
import Container from 'react-bootstrap/Container';
import img from '../../../Assets/Images/michler.webp';
import { Col, Row } from 'react-bootstrap';
import Countup from '../../../Compnents/CountUp/Countup';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
const AboutPower = () => {
  const { data } = useFetch('/trending/all/day?language=en-US');
  const theme = useSelector((state) => state.mode.theme);
  return (
    <section id="power" data-theme={theme}>
      <Container>
        <div className="power">
          <div className="power-top">
            <h5>
              Unleashing the power of authenticity and emotion, Michelle Fischer
              takes you on a transformative journey through her captivating
              performances and profound storytelling.
            </h5>
          </div>
          <Row>
            {data?.results?.slice(0, 4)?.map((item) => {
              const uniqueMovieTypes = [];
              if (!uniqueMovieTypes.includes(item?.media_type)) {
                uniqueMovieTypes.push(item?.media_type);
              }
              return (
                <Col xs={12} xl={3} lg={3} md={6} sm={6} key={item?.id}>
                  <Countup count={item?.vote_count} type={uniqueMovieTypes} />
                </Col>
              );
            })}
          </Row>
          <div className="content_bottom">
            <p>
              Welcome to the official website of Michelle Fischer, a versatile
              and captivating performer known for her authentic portrayals and
              emotional depth. Explore her remarkable body of work, from stage
              to screen, and immerse yourself in the power of her storytelling.
              Discover the passion, vulnerability, and artistic brilliance that
              defines Michelle’s journey as an artist. Engage with her
              thought-provoking performances and gain insight into her creative
              process. Join us as we celebrate Michelle Fischer’s talent,
              dedication, and unwavering commitment to the craft of acting.
            </p>
            <div className="img-side">
              <img src={img} alt="" data-theme={theme} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPower;
