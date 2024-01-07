import { Container } from 'react-bootstrap';
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import './Latest.scss';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import noImage from '../../../Assets/Images/no-poster.png';
SwiperCore.use([Navigation]);
const Latest = () => {
  const { data } = useFetch(`/movie/popular`);
  const { url } = useSelector((state) => state.api);
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
          loop={true}
          modules={[Navigation]}
          autoplay={true}
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
          {data?.results?.slice(0, 10)?.map((slide) => {
            let image = slide?.poster_path
              ? `${url.poster}/${slide?.poster_path}`
              : noImage;
            return (
              <SwiperSlide key={slide?.id}>
                <SliderCard
                  type="movie"
                  id={slide?.id}
                  title={slide?.title}
                  src={image}
                  genre_ids={slide?.genre_ids?.slice(0, 3)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Latest;
