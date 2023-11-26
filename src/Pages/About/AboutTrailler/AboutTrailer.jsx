import './AboutTrailer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trailler1 from '../../../Assets/Images/trailler1.webp';
import trailler2 from '../../../Assets/Images/trailler2.webp';
import trailler3 from '../../../Assets/Images/trailler3.webp';
import { Link } from 'react-router-dom';
const AboutTrailer = () => {
  return (
    <>
      <section id="about-trailler">
        <Row className="about-trailler">
          <Col className="col" xs={12} md={6}>
            <div className="trailler_card">
              <img src={trailler1} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Generations</h1>
                  <p>Action,Crime,Drama,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="" >
                  Watch the Trailer
                </Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="trailler_card">
              <img src={trailler2} alt="" />
              <div className="text">
                <div className="content">
                  <h1>Red Brothers</h1>
                  <p>Action,Family,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="" >
                  Watch the Trailer
                </Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="trailler_card">
              <img src={trailler3} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Gentlman</h1>
                  <p>Biography,Documentary,History</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="" >
                  Watch the Trailer
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutTrailer;
