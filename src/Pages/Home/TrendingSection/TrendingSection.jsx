import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './TrendingSection.scss';
import 'swiper/swiper-bundle.css';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import HomeSection from '../../../Compnents/HomeSection/HomeSection';
import noImage from '../../../Assets/Images/no-poster.png';
SwiperCore.use([Navigation]);
const TrendingSection = () => {
  const [endPoint, setEndPoint] = useState('day');
  const { url } = useSelector((state) => state.api);
  const { data } = useFetch(`/trending/all/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab === 'Day' ? 'day' : 'week');
  };
  return (
    <section id="our_latest">
      <HomeSection
        data={['Day', 'Week']}
        onTabChange={onTabChange}
        title="Trending"
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
                  id={slide?.id}
                  type="movie"
                  name={slide?.name}
                  title={slide?.title}
                  src={image}
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

export default TrendingSection;
