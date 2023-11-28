import "./FilmPortfolio.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const FilmPortfolio = () => {
  const queryparams = {
    i: "tt3896198",
    apikey: "84677991",
    s: "Red",
    type: "movie",
  };
  const { data, loading } = useFetch(queryparams);
  return (
    <section id="portfolio">
      <Container>
        <Row>
          {data?.Search?.map((item)=>{
            return (
              <Col key={item?.imdbID} className="col" xs={12} md={6}>
              <div className="portfolio_card">
                <img src={item?.Poster} alt={item?.Title} />
                <div className="text">
                  <div className="content">
                    <h1>{item?.Title}</h1>
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
