import { Container } from 'react-bootstrap';
import './DetailCast.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import profile from '../../../Assets/Images/avatar-cast.png';
import Cast from '../../../Compnents/Cast/Cast';
const DetailCast = () => {
  const { url } = useSelector((state) => state.api);
  const theme = useSelector((state) => state.mode.theme);
  const { mediaType, movie_id } = useParams();
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${movie_id}/credits`
  );

  console.log(credits);
  return (
    <>
      {credits?.cast?.length > 0 ? (
        <section id="detail_cast" data-theme={theme}>
          <Container>
            <SectionTitle headingCenter="Top Cast" />
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
              {credits?.cast?.map((item, index) => {
                let itemImage = item?.profile_path
                  ? url.profile + item?.profile_path
                  : profile;
                return (
                  <SwiperSlide key={index || item?.id}>
                    <Cast
                      creditsLoading={creditsLoading}
                      src={itemImage}
                      name={item.name}
                      character={item.character}
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

export default DetailCast;
