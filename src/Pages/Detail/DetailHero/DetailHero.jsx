import { Col, Container, Row } from 'react-bootstrap';
import './DetailHero.scss';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import dayjs from 'dayjs';
import Genres from '../../../Compnents/Genres/Genres';
import WatchTrailer from '../../../Compnents/WatchTrailer/WatchTrailer';
import { useSelector } from 'react-redux';
const DetailHero = () => {
  const { mediaType, movie_id } = useParams();
  console.log('movie_id', movie_id);
  const { data } = useFetch(`/${mediaType}/${movie_id}`);
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };
  const _genres = data?.genres.map((g) => g.id);
  const { url } = useSelector((state) => state.api);
  return (
    <div
      id="detail-hero"
      style={{ backgroundImage: `url(${url.backdrop}${data?.backdrop_path})` }}>
      <Container>
        <Row>
          <Col lg={4} xl={4} md={12} sm={12} xs={12}>
            <figure className="detail_img">
              <img
                src={`${url.poster}${data?.poster_path}`}
                alt={data?.original_title}
              />
            </figure>
          </Col>
          <Col lg={8} xl={8} md={12} sm={12} xs={12}>
            <article className="detail_content">
              <h5 className="title">{data?.original_title}</h5>
              <h3 className="tagline">{data?.tagline}</h3>
              <p className="content">{data?.overview}</p>

              <div className="addition_detail_hero">
                <WatchTrailer />

                <ul className="watch_trailer_list">
                  <li>{toHoursAndMinutes(data?.runtime)}</li>
                  <li>
                    <Genres data={_genres} />
                  </li>
                  <li> {dayjs(data?.release_date).format('MMM D, YYYY')}</li>
                </ul>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailHero;
