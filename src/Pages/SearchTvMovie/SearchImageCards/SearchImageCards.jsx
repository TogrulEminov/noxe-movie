import { Container, Row, Col} from 'react-bootstrap';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import noImage from '../../../Assets/Images/no-poster.png';
import { useSelector } from 'react-redux';
import './SearchImageCard.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../../../Compnents/Spinner/Spinner';
const SearchImageCards = ({ data, page, loading, fetchNextData }) => {
  const { url } = useSelector((state) => state.api);
  return (
    <div className="search_result_movie_tv">
      <Container>
        {data?.results.length ? (
          <InfiniteScroll
            className="row"
            dataLength={data.results.length || []}
            next={fetchNextData}
            hasMore={page <= data.total_pages}
            loader={<Spinner />}>
            {data?.results?.map((item) => {
              if (item.media_type === 'person') return;
              return (
                <Col xs={12} sm={6} md={6} lg={4} xl={3} key={item.id}>
                  <SliderCard
                    className="movies_tv"
                    title={item?.original_title}
                    src={`${
                      item?.poster_path
                        ? ` ${url.poster}/${item?.poster_path}`
                        : noImage
                    }`}
                    genre_ids={item?.genre_ids.slice(0, 3)}
                    id={item?.id}
                  />
                </Col>
              );
            })}
          </InfiniteScroll>
        ) : (
          <p>Data is not found</p>
        )}
      </Container>
    </div>
  );
};

export default SearchImageCards;
