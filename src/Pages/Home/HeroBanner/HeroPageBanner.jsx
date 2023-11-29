import { Container } from 'react-bootstrap';
import './HeroPageBanner.scss';
import Poster from '../../../Compnents/Poster/Poster';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import useFetch from '../../../hooks/useFetch';
const HeroPageBanner = () => {
  const queryparams = {
    i: "tt3896198",
    apikey: "84677991",
    s: "Batman",
    type: "movie",
  };
  const {data}=useFetch(queryparams)
  

  return (
    <section id="hero_banner">
      <Container>
        <Swiper
          // pagination={pagination}
          slidesPerView={1}
          loop={false}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="hero_banner_wrapper">
          <div className="swiper-wrapper">
            {data?.Search?.map((item) => {
              return (
                <SwiperSlide key={item.imdbID}>
                  <Poster  src={item?.Poster} title={item?.Title} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default HeroPageBanner;
