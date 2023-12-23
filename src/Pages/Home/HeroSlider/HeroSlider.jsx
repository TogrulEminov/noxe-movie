import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HeroSlider.scss';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';
import useFetch from '../../../hooks/useFetch';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Col, Container, Row } from 'react-bootstrap';
import Genres from '../../../Compnents/Genres/Genres';
import dayjs from 'dayjs';
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);
const HeroSlider = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const { data } = useFetch('/discover/movie');
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
  return (
    <section id="hero_slider">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          draggable={false}
          effect={'fade'}
          mousewheel={false}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero_slider_images">
          {data?.results?.slice(10, 15).map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="swiper_card"
                style={{
                  backgroundImage: `url(${IMAGE_PATH}${item?.backdrop_path})`,
                }}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <div className="hero_slider_content">
                        <h1 title={`${item?.original_title}`}>
                          {item?.original_title}
                        </h1>
                        <p>{item?.overview}</p>

                        <div className="addition_hero_slider">
                          <ul className="watch_trailer_list">
                            <li>
                              <Genres data={item?.genre_ids} />
                            </li>
                            <li>
                              {' '}
                              {dayjs(item?.release_date).format('MMM D, YYYY')}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            );
          })}
          <div className="hero_swiper-controls">
            <button ref={prevButtonRef}>
              <ArrowBackIosNewIcon />
            </button>
            <div id="containerForBullets"></div>
            <button ref={nextButtonRef}>
              <ArrowForwardIos />
            </button>
          </div>
        </Swiper>
      </>
    </section>
  );
};
export default HeroSlider;