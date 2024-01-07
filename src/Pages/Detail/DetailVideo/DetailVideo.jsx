import { useSelector } from 'react-redux';
import './DetailVideo.scss';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import Videos from '../../../Compnents/Videos/Videos';
import VideoPlayer from '../../../Compnents/VideoPlayer/VideoPlayer';
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import noImage from '../../../Assets/Images/no-poster.png';
import { useParams } from 'react-router-dom';
const DetailVideo = () => {
  const { url } = useSelector((state) => state.api);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType, movie_id } = useParams();
  const { data: video } = useFetch(`/${mediaType}/${movie_id}/videos`);
  const { data: images } = useFetch(`/${mediaType}/${movie_id}/images`);

  const combinedData = [...(video?.results || []), ...(images?.posters || [])];
  const handleOpen = (videoKey) => {
    document.body.classList.add('no-scroll');
    setShow(true);
    setVideoId(videoKey);
  };

  return (
    <>
      {combinedData?.length > 0 ? (
        <section id="video_section">
          <Container>
            <SectionTitle headingCenter="Videos & Trailers" />
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
              {combinedData?.slice(0, 20)?.map((item, index) => {
                const image = item?.file_path
                  ? `${url.poster}/${item?.file_path}`
                  : noImage;
                return (
                  <SwiperSlide key={item?.id || index}>
                    <Videos
                      title={item?.name}
                      src={image}
                      onClick={() => handleOpen(item?.key)}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <VideoPlayer
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </Container>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailVideo;
