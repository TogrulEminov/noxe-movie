import { Col, Container, Row } from 'react-bootstrap';
import './WishListHero.scss';
const WishListHero = () => {
  return (
    <section id="wishlist_hero">
      <Container>
        <Row>
          <Col xs={12}>
            <article className="wishlist-content">
              <h2>Wishlist page</h2>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WishListHero;
