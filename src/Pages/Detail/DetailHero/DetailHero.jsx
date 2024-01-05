import { Col, Container, Row } from 'react-bootstrap';
import './DetailHero.scss';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import noImage from '../../../Assets/Images/no-poster.png';
import dayjs from 'dayjs';
import Genres from '../../../Compnents/Genres/Genres';
import WatchTrailer from '../../../Compnents/WatchTrailer/WatchTrailer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import VideoPlayer from '../../../Compnents/VideoPlayer/VideoPlayer';
import LazyLoadImg from '../../../Compnents/LazyLoadImg/LazyLoadImg';
import bgNo from '../../../Assets/Images/footer-bg.jpg';
const DetailHero = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType, movie_id } = useParams();
  const { data } = useFetch(`/${mediaType}/${movie_id}`);
  const { data: video } = useFetch(`/${mediaType}/${movie_id}/videos`);
  const videoKey = video?.results.map((g) => g.key);
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };
  const _genres = data?.genres.map((g) => g.id);
  const { url } = useSelector((state) => state.api);

  const handleOpenVideo = () => {
    setShow(true);
    setVideoId(videoKey[0]);
    document.body.classList.add('no-scroll');
  };
  return (
    <>
      <div
        id="detail-hero"
        style={{
          backgroundImage: data?.backdrop_path
            ? `url(${url.backdrop}${data.backdrop_path})`
            : `url(${bgNo})`,
        }}>
        <Container>
          <Row>
            <Col lg={4} xl={4} md={10} sm={10} xs={12}>
              <figure className="detail_img">
                {data?.poster_path ? (
                  <LazyLoadImg
                    src={`${url.poster}${data?.poster_path}`}
                    alt={data?.original_title}
                  />
                ) : (
                  <LazyLoadImg src={noImage} alt="no image" />
                )}
              </figure>
            </Col>
            <Col lg={8} xl={8} md={12} sm={12} xs={12}>
              <article className="detail_content">
                <h5 className="title">{data?.original_title}</h5>
                <h3 className="tagline">{data?.tagline}</h3>
                <p className="content">{data?.overview}</p>

                <div className="addition_detail_hero">
                  <WatchTrailer onClick={() => handleOpenVideo()} />
                  <VideoPlayer
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                  />
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
    </>
  );
};

export default DetailHero;
