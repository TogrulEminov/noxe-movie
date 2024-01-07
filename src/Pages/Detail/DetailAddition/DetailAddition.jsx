import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import './DetailAddition.scss';
import StarRating from '../../../Compnents/StarRating/StarRating';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const DetailAddition = () => {
  const theme = useSelector((state) => state.mode.theme);
  const { mediaType, movie_id } = useParams();
  const { data: average } = useFetch(`/${mediaType}/${movie_id}`);
  const { data: reviews } = useFetch(`/${mediaType}/${movie_id}/reviews`);
  return (
    <div className="addition_for_detail" data-theme={theme}>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="addition_side">
              <StarRating
                stars={average?.vote_average}
                reviews={reviews?.results?.length}
              />
              <h4 className="average_with_count">
                {average?.vote_average?.toFixed(1)} / 10
              </h4>
            </div>
          </Col>
        
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className="addition_side">
                <h3>Languages</h3>
                <p className="description">
                {average?.spoken_languages[1]  ?   average?.spoken_languages[1]?.english_name : 'No language'}
                </p>
              </div>
            </Col>
         

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="addition_side">
              <h3>Popularity</h3>
              <p className="description">{average?.popularity?.toFixed(2)}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="addition_side">
              <h3>Status</h3>
              <p className="description">{average?.status}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailAddition;
