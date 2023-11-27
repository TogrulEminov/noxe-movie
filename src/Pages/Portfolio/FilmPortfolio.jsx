import "./FilmPortfolio.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const FilmPortfolio = () => {
  const {data}=useFetch('/tv/popular')
  return (
    <section id="portfolio">
      <Container>
        <Row>
          {data?.results?.map((item)=>{
            return (
              <Col className="col" xs={12} md={6}>
              <div className="portfolio_card">
                <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt="" />
                <div className="text">
                  <div className="content">
                    <h1>{item?.name}</h1>
                  </div>
                </div>
                <div className="watch_trailler">
                  <Link to="">Watch the Trailer</Link>
                </div>
              </div>
            </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  );
};

export default FilmPortfolio;
