import { Container } from "react-bootstrap";
import "./HeroPageBanner.scss";
// import Poster from "../../../Compnents/Poster/Poster";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
const HeroPageBanner = () => {
  // const queryparams = {
  //   api_key: "5de87e1bc5e9a0ac27e1f4758765722a",
  // };
  const {data} = useFetch('/discover/movie');
  console.log(data);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  return (
    <section id="hero_banner">
      <Container>
        <Swiper
          slidesPerView={1}
          loop={false}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="hero_banner_wrapper"
        >
          <div className="swiper-wrapper">
            {data?.map((item) => {
              console.log(item);
              console.log("j");
              return (
                <SwiperSlide key={item.id}>
                  <div className="poster_card">
                    <img src={`${IMAGE_PATH}${item.poster_path}`} alt="poster" />
                    <div className="poster_details">
                      <h5 className="poster-title">
                        <Link to="">{item.title}</Link>
                      </h5>
                      <div className="poster_genres"></div>
                      <div className="watch-trailler">
                        <Link to="">Watch the Trailer</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default HeroPageBanner;
