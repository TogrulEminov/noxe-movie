import React from 'react';
import './MoviesCardsArea.scss';
import { Col, Container, Row } from 'react-bootstrap';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import { useSelector } from 'react-redux';
const MoviesCardsArea = ({ data }) => {
  const { url } = useSelector((state) => state.api);
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="movies_card_section" data-theme={theme}>
      <Container>
        <Row>
          {data?.results?.map((item) => {
            return (
              <Col xs={12} sm={6} md={6} lg={4} xl={3} key={item?.id}>
                <SliderCard
                type="movie"
                  className="movies_tv"
                  title={item?.original_title}
                  src={`${url.poster}/${item?.poster_path}`}
                  genre_ids={item?.genre_ids}
                  id={item?.id}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MoviesCardsArea;
