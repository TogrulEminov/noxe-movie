import "./FilmPortfolio.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../Assets/Images/img1.webp";
import img2 from "../../Assets/Images/img2.webp";
import img3 from "../../Assets/Images/img3.webp";
import img4 from "../../Assets/Images/img4.webp";
import img5 from "../../Assets/Images/img5.webp";
import img6 from "../../Assets/Images/img6.webp";
import img7 from "../../Assets/Images/img7.webp";
import img8 from "../../Assets/Images/img8.webp";
import img9 from "../../Assets/Images/img9.webp";
import img10 from "../../Assets/Images/img10.webp";
import img11 from "../../Assets/Images/img11.webp";
import img12 from "../../Assets/Images/img12.webp";
import { Link } from "react-router-dom";
const FilmPortfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row className="about-trailler">
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img1} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Generations</h1>
                  <p>Action,Crime,Drama,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img2} alt="" />
              <div className="text">
                <div className="content">
                  <h1>Red Brothers</h1>
                  <p>Action,Family,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="about-trailler">
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img4} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Generations</h1>
                  <p>Action,Crime,Drama,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img3} alt="" />
              <div className="text">
                <div className="content">
                  <h1>Red Brothers</h1>
                  <p>Action,Family,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="about-trailler">
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img5} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Generations</h1>
                  <p>Action,Crime,Drama,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img6} alt="" />
              <div className="text">
                <div className="content">
                  <h1>Red Brothers</h1>
                  <p>Action,Family,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="about-trailler">
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img7} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Generations</h1>
                  <p>Action,Crime,Drama,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img8} alt="" />
              <div className="text">
                <div className="content">
                  <h1>Red Brothers</h1>
                  <p>Action,Family,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="about-trailler">
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img9} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Generations</h1>
                  <p>Action,Crime,Drama,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img10} alt="" />
              <div className="text">
                <div className="content">
                  <h1>Red Brothers</h1>
                  <p>Action,Family,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="about-trailler">
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img11} alt="" />
              <div className="text">
                <div className="content">
                  <h1>The Generations</h1>
                  <p>Action,Crime,Drama,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} md={6}>
            <div className="portfolio_card">
              <img src={img12} alt="" />
              <div className="text">
                <div className="content">
                  <h1>Red Brothers</h1>
                  <p>Action,Family,Thriller</p>
                </div>
              </div>
              <div className="watch_trailler">
                <Link to="">Watch the Trailer</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FilmPortfolio;
