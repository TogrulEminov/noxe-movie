import { Container } from 'react-bootstrap';
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import './Latest.scss';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useFetch from '../../../hooks/useFetch';
SwiperCore.use([Navigation]);

const Latest = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const { data } = useFetch(`/movie/popular`);
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
  return (
    <section id="our_latest">
      <SectionTitle
        headingTop="NEWEST ENTERTAINMENT PICKS"
        headingCenter="Our Latest Movies & TV Shows"
        pharagraph="Discover the latest in entertainment with our top picks of movies and TV shows! From thrilling blockbusters to captivating dramas, indulge in a world of endless possibilities. Stay up-to-date with our constantly updated collection and immerse yourself in the ultimate viewing experience. Don't miss out!"
      />
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          pagination={{
            el: '#containerForBullets',
            type: 'bullets',
            bulletClass: 'swiper-custom-bullet',
            bulletActiveClass: 'swiper-custom-bullet-active',
            clickable: true,
          }}
          loop={true}
          modules={[Navigation]}
          autoplay={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="slide_carousel">
          {data?.results?.slice(0, 10).map((slide) => {
          
            return (
              <SwiperSlide key={slide.id}>
                <SliderCard
                  id={slide.id}
                  title={slide?.original_title}
                  src={`${IMAGE_PATH}${slide?.poster_path}`}
                  genre_ids={slide?.genre_ids}
                />
              </SwiperSlide>
            );
          })}

          <div className="swiper-controls">
            <button ref={prevButtonRef}>
              <ArrowBackIcon />
            </button>
            <div id="containerForBullets"></div>
            <button ref={nextButtonRef}>
              <ArrowForwardIcon />
            </button>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Latest;
