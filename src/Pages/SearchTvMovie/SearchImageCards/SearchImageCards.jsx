import { Container, Row, Col } from 'react-bootstrap';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import noImage from '../../../Assets/Images/no-poster.png';
import { useSelector } from 'react-redux';
import './SearchImageCard.scss';
const SearchImageCards = ({ data }) => {
  const { url } = useSelector((state) => state.api);
  return (
    <div className="search_result_movie_tv">
      <Container>
        <Row>
          {data?.results.length ? (
            <>
              {data?.results?.map((item) => (
                <Col xs={12} sm={6} md={6} lg={4} xl={3} key={item.id}>
                  <SliderCard
                    className="movies_tv"
                    title={item?.original_title}
                    src={`${
                      item?.poster_path
                        ? ` ${url.poster}/${item?.poster_path}`
                        : noImage
                    }`}
                    genre_ids={item?.genre_ids.slice(0,3)}
                    id={item?.id}
                  />
                </Col>
              ))}
            </>
          ) : (
            <p>Data is not found</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SearchImageCards;
