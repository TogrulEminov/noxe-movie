import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './FileringArea.scss';
import FilmCard from '../../../Compnents/FilmCard/FilmCard';
import SearchInput from '../../../Compnents/Selects/SearchInput';
const FileringArea = () => {
  return (
    <section id="filtering_section">
      <Container>
        <div className="filter_input">
          <Row>
          </Row>
        </div>
        <Row>
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </Row>
      </Container>
    </section>
  );
};

export default FileringArea;
