import { Col, Container, Row } from 'react-bootstrap';
import './DetailHero.scss';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import dayjs from 'dayjs';
const DetailHero = () => {
  const { mediaType, movie_id } = useParams();
  console.log('movie_id', movie_id);
  const { data, loading } = useFetch(`/${mediaType}/${movie_id}`);
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
  console.log(data);
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };
  return (
    <div
      id="detail-hero"
      style={{ backgroundImage: `url(${IMAGE_PATH}/${data?.backdrop_path})` }}>
      <Container>
        <Row>
          <Col lg={4} xl={4} md={12} sm={12} xs={12}>
            <figure className="detail_img">
              <img
                src={`${IMAGE_PATH}${data?.poster_path}`}
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
                <div className="watch_trailler">
                  <button>
                    <span>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="80px"
                        height="80px"
                        viewBox="0 0 213.7 213.7"
                        enableBackground="new 0 0 213.7 213.7"
                        xmlSpace="preserve">
                        <polygon
                          className="triangle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                        <circle
                          className="circle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          cx="106.8"
                          cy="106.8"
                          r="103.3"></circle>
                      </svg>
                    </span>
                    <p>Watch the Trailer</p>
                  </button>
                </div>
                <ul className="watch_trailer_list">
                  <li>{toHoursAndMinutes(data?.runtime)}</li>
                  <li>genres</li>
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
