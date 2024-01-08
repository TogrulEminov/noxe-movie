import './AboutTrailer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../../../hooks/useFetch';
import Poster from '../../../Compnents/Poster/Poster';
import { useSelector } from 'react-redux';
const AboutTrailer = () => {
  const { url } = useSelector((state) => state.api);
  const { data } = useFetch('/trending/movie/day?page=4');
  return (
    <>
      <section id="about-trailler">
        <Row className="about-trailler">
          {data?.results?.slice(10,13)?.map((item) => {
            return (
              <Col className="col" xs={12} md={6} key={item?.id}>
                <Poster
                  src={`${url.poster}/${item?.poster_path}`}
                  title={item?.original_title}
                  alt={item?.media_type}
                  genre_ids={item?.genre_ids}
                  item_id={item?.id}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
};

export default AboutTrailer;
