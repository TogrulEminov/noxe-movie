import { Container } from 'react-bootstrap';
import './HeroPageBanner.scss';
import Poster from '../../../Compnents/Poster/Poster';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const HeroPageBanner = () => {
  const slider = [
    {
      id: 1,
      url: 'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/03/title-image-13-1255x790.jpg',
      title: 'Red Brother',
    },
    {
      id: 2,
      url: 'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg',
      title: 'Screampark',
    },
    {
      id: 3,
      url: 'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-7-1255x790.jpg',
      title: 'The Gentleman',
    },
    {
      id: 4,
      url: 'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-5-1255x790.jpg',
      title: 'The Generations',
    },
  ];
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
            {slider?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Poster src={item?.url} title={item?.title} />
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
