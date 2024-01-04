import { useState } from 'react';
import PremiumCard from '../../../Compnents/PremiumCard/PremiumCard';
import './WishListCartArea.scss';
import { Col, Container, Row } from 'react-bootstrap';
import PremiumMovieTrailer from '../../../Compnents/PremiumMovieTrailer/PremiumMovieTrailer';
const WishListCartArea = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [show, setShow] = useState(false);
  const handleCardClick = (movieId) => {
    setSelectedMovieId(movieId);
    console.log(movieId);
    setShow(true);
  };
  return (
    <section id="wishlist_cards_area">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={4} xl={3}>
            {/* <PremiumCard cardClick={() => handleCardClick()} /> */}
          </Col>
        </Row>
        <PremiumMovieTrailer
          show={show}
          //   url={movies.find((movie) => movie.id === selectedMovieId)?.trailer}
          setShow={setShow}
        />
      </Container>
    </section>
  );
};

export default WishListCartArea;
