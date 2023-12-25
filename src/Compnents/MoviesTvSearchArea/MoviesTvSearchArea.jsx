import React from 'react';
import SearchMT from './SearchMT/SearchMT';
import './MoviesTvSearchArea.scss';
import TypeCounShow from './TypeCounShow/TypeCounShow';
import { Col, Container, Row } from 'react-bootstrap';
import GenresDropdown from './GenresDropdown/GenresDropdown';
import { useState } from 'react';
import NetWork from './NetWork/NetWork';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
const MoviesSearchArea = ({ data }) => {
  const [adults, setAdults] = useState('');
  const [region, setRegion] = useState('');
  const [query, setQuery] = useState('');
  const theme = useSelector((state) => state.mode.theme);
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    if (!adults.key || !region.title || !query) return;
    const newQueryParams = new URLSearchParams(search);
    newQueryParams.set('query', query);

    newQueryParams.set('regions', region.title);
    newQueryParams.set('adults', adults.key);
    navigate(`/search/movie?${newQueryParams}`);
  };
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search_movies_tv_shows" data-theme={theme}>
      <Container>
        <form onSubmit={handleSearch}>
          <Row>
            <Col xs={12} xl={2} lg={2} md={6}>
              <TypeCounShow type="Movie" total={data?.results?.length} />
            </Col>
            <Col xs={12} xl={4} lg={4} md={6}>
              <SearchMT
                type="movie"
                query={query}
                handleSearchChange={handleSearchChange}
              />
            </Col>
            <Col xs={12} xl={2} lg={2} md={4} sm={6}>
              <GenresDropdown setAdults={setAdults} className="genres_drop" />
            </Col>
            <Col xs={12} xl={2} lg={2} md={4} sm={6}>
              <NetWork setRegion={setRegion} />
            </Col>

            <Col xs={12} xl={2} lg={2} md={4}>
              <button className="searchBtn">Search</button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default MoviesSearchArea;
