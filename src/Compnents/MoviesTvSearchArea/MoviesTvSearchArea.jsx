import React from 'react';
import SearchMT from './SearchMT/SearchMT';
import './MoviesTvSearchArea.scss';
import TypeCounShow from './TypeCounShow/TypeCounShow';
import { Col, Container, Row } from 'react-bootstrap';
import GenresDropdown from './GenresDropdown/GenresDropdown';
import { useState } from 'react';
import NetWork from './NetWork/NetWork';
import Button from '@mui/material/Button';
const MoviesSearchArea = ({ data }) => {
  const [genres, setGenres] = useState('');
  const [network, setNetwork] = useState('');
  console.log(data);
  return (
    <div className="search_movies_tv_shows">
      <Container>
        <form>
          <Row>
            <Col xs={12} xl={2} lg={2} md={6}>
              <TypeCounShow type="Movie" total={data?.results?.length} />
            </Col>
            <Col xs={12} xl={4} lg={4} md={6}>
              <SearchMT type="movie" />
            </Col>
            <Col xs={12} xl={2} lg={2} md={4} sm={6}>
              <GenresDropdown
                genres={genres}
                setGenres={setGenres}
                className="genres_drop"
              />
            </Col>
            <Col xs={12} xl={2} lg={2} md={4} sm={6}>
              <NetWork network={network} setNetwork={setNetwork} />
            </Col>

            <Col xs={12} xl={2} lg={2} md={4}>
              <Button variant="contained">Search</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default MoviesSearchArea;
