import "./FilmPortfolio.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const FilmPortfolio = () => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

  const data = useFetch();
  console.log(data.data);
  return (
    <section id="portfolio">
      <Container>
        <Row>
          {data.data?.map((item)=>{
            console.log(item.backdrop_path
                );
            return (
              <Col key={item?.id} className="col" xs={12} md={6}>
              <div className="portfolio_card">
                <img   src={`${IMAGE_PATH}${item.poster_path}`} alt={item?.title} />
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
