import { useParams } from 'react-router-dom';
import Fancybox from '../../../Compnents/FancyBox/FancyBox';
import Photo from '../../../Compnents/Photo/Photo';
import './Photos.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
SwiperCore.use([Navigation]);
const Photos = () => {
  const { mediaType, movie_id } = useParams();
  const { data: images } = useFetch(`/${mediaType}/${movie_id}/images`);
  const { url } = useSelector((state) => state.api);
  return (
    <>
      {images?.posters?.length > 0 ? (
        <div id="PhotosSection">
          <Container>
            <SectionTitle headingCenter="Photos" />
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
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
                {images?.posters?.slice(0, 10)?.map((item, index) => {
                  return (
                    <SwiperSlide key={item.id || index}>
                      <Photo
                        src={`${url.poster}/${item?.file_path}`}
                        to={`${url.poster}${item?.file_path}`}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Fancybox>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Photos;
