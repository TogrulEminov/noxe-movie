import { Container } from 'react-bootstrap';
import './DetailSimilar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import { useSelector } from 'react-redux';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import useFetch from '../../../hooks/useFetch';
import noImage from '../../../Assets/Images/no-poster.png';
import { useParams } from 'react-router-dom';
const DetailSimilar = () => {
  const { url } = useSelector((state) => state.api);
  const { mediaType, movie_id } = useParams();
  const { data: similar } = useFetch(`/${mediaType}/${movie_id}/similar`);
  console.log(similar);
  return (
    <>
      {similar?.results?.length > 0 ? (
        <section id="detail_similar">
          <Container>
            <SectionTitle headingCenter="Similar movies" />
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Navigation]}
              autoplay={false}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                },
                345: {
                  slidesPerView: 1.5,
                },

                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4.5,
                },
              }}
              className="slide_carousel">
              {similar?.results?.map((item) => {
                let image = item?.poster_path
                  ? `${url.poster}/${item?.poster_path}`
                  : noImage;

                return (
                  <SwiperSlide key={item?.id}>
                    <SliderCard
                      id={item.id}
                      title={item?.title}
                      name={item?.name}
                      src={image}
                      genre_ids={item?.genre_ids.slice(0, 3)}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailSimilar;
