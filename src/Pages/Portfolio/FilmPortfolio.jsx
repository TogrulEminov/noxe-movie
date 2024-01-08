import './FilmPortfolio.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Poster from '../../Compnents/Poster/Poster';
import FilmPortfolioHero from './FilmPortfolioHero/FilmPortfolioHero';
import { useEffect, useState } from 'react';
const FilmPortfolio = () => {
  const { url } = useSelector((state) => state.api);
  const { data } = useFetch('/discover/movie');
  const [background, setBackground] = useState('');
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data, url.backdrop]);
  return (
    <>
      <FilmPortfolioHero background={background} />
      <section id="portfolio">
        <Container>
          <Row>
            {data?.results?.map((item) => {
              return (
                <Col key={item?.id} className="col" xs={12} md={6} lg={6}>
                  <Poster
                    src={`${url.poster}/${item?.poster_path}`}
                    alt={item?.title}
                    title={item?.title}
                    genre_ids={item?.genre_ids}
                    item_id={item?.id}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FilmPortfolio;
