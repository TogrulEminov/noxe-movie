import { Container } from 'react-bootstrap';
import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from '../../../Compnents/ReviewsCard/ReviewsCard';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination } from 'swiper';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
SwiperCore.use([Pagination]);
const Reviews = () => {
  const { url } = useSelector((state) => state.api);
  const { data } = useFetch(`/person/popular`);
  const theme = useSelector((state) => state.mode.theme);
  return (
    <section id="reviews" data-theme={theme}>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={true}
          pagination={{
            el: '#containerForBulletsReviews',
            type: 'bullets',
            bulletClass: 'swiper-custom-bullet',
            bulletActiveClass: 'swiper-custom-bullet-active',
            clickable: true,
          }}
          modules={[Pagination]}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.update();
            });
          }}
          className="reviews_slider">
          {data?.results?.slice(0, 10)?.map((item) => {
            const known_for = item?.known_for.map((g) => g.overview);
            return (
              <SwiperSlide key={item.id}>
                <ReviewsCard
                  title={item?.original_name}
                  desc={known_for[0]}
                  img={`${url.profile}/${item?.profile_path}`}
                />
              </SwiperSlide>
            );
          })}
          <div className="swiper-controls">
            <div id="containerForBulletsReviews" data-theme={theme}></div>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Reviews;
