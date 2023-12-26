import { useState } from 'react';
import HomeSection from '../../../Compnents/HomeSection/HomeSection';
import './TopRated.scss';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Container } from 'react-bootstrap';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
SwiperCore.use([Navigation]);
const TopRated = () => {
  const [endPoint, setEndpoint] = useState('movie');
  const { url } = useSelector((state) => state.api);
  const { data } = useFetch(`/${endPoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <section id="top_rated">
      <HomeSection
        title="Top Rated"
        data={['Movies', 'TV Shows']}
        onTabChange={onTabChange}
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
          {data?.results?.slice(0, 10).map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <SliderCard
                  id={slide.id}
                  title={slide?.title}
                  src={`${url.poster}${slide?.poster_path}`}
                  genre_ids={slide?.genre_ids.slice(0, 3)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default TopRated;
