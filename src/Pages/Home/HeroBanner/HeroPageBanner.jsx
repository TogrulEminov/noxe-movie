import { Container } from 'react-bootstrap';
import './HeroPageBanner.scss';
import Poster from '../../../Compnents/Poster/Poster';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useFetch from '../../../hooks/useFetch';
const HeroPageBanner = () => {
  const {data}=useFetch('/tv/popular')
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <section id="hero_banner">
      <Container>
        <Swiper
          // pagination={pagination}
          slidesPerView={1}
          loop={false}
          autoplay={true}
          modules={[Pagination]}
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
                  <Poster src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} title={item?.name} />
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
