import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HeroSlider.scss';
import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper';
import useFetch from '../../../hooks/useFetch';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Col, Container, Row } from 'react-bootstrap';
import Genres from '../../../Compnents/Genres/Genres';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import WatchTrailer from '../../../Compnents/WatchTrailer/WatchTrailer';
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const HeroSlider = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const { data } = useFetch('/discover/movie');
  const { url } = useSelector((state) => state.api);

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
          modules={[Autoplay, Navigation]}
          className="hero_slider_images">
          {data?.results?.slice(10, 15).map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="swiper_card"
                style={{
                  backgroundImage: `url(${url.backdrop}${item?.backdrop_path})`,
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
            {/* <div id="containerForBullets"></div> */}
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
