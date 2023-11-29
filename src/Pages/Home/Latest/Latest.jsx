import { Container } from 'react-bootstrap';
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import './Latest.scss';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Latest = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

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
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
          <div className="swiper-controls">
            <button ref={prevButtonRef}>
              <ArrowBackIcon />
            </button>
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
