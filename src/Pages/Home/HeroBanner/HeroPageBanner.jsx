import { Container } from 'react-bootstrap';
import './HeroPageBanner.scss';
import Poster from '../../../Compnents/Poster/Poster';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import useFetch from '../../../hooks/useFetch';
const HeroPageBanner = () => {
  const { data } = useFetch('/discover/movie');
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';

  return (
    <section id="hero_banner">
      <Container>
        <Swiper
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
            {data?.results?.map((item) => {
           return (
                <SwiperSlide key={item.id}>
                  <Poster
                    src={`${IMAGE_PATH}${item.poster_path}`}
                    alt={item?.title}
                    title={item?.title}
                    genre_ids={item?.genre_ids}
                    item_id={item?.id}
                  />
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
