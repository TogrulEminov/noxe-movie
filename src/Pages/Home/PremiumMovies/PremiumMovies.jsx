import { Container } from "react-bootstrap";
import "./PremiumMovies.scss";
import SliderCard from "../../../Compnents/SliderCard/SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect, useRef } from "react";

import { useState } from "react";
import axios from "axios";
SwiperCore.use([Navigation]);
//
const PREMIUM_MOVIES = "http://localhost:3031/allMovies";
const BASKET_URL = "http://localhost:3031/basket";
const PremiumMovies = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  //
  const [movies, setMovies] = useState([]);
  // const [check, setCheck] = useState(false);
  const fetchMovies = async () => {
    const resp = await axios.get(PREMIUM_MOVIES);
    const data = resp.data;
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  //basket
  const profile = JSON.parse(localStorage.getItem("user"));
  const addBasket = async (movie) => {
    const userId = profile?.id;
    await axios.post(BASKET_URL, { [userId]: { ...movie, userId } });
    // setCheck((check) => !check);
  };



  return (
    <section id="premium">
      <Container>
        <h5>Premium Movies</h5>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          pagination={{
            el: "#containerForBullets",
            type: "bullets",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
            clickable: true,
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
          className="slide_carousel"
        >
          {movies.map((movie) => {
            return (
              <>
                <SwiperSlide key={movie.id}>
                  <SliderCard
                    id={movie.id}
                    title={movie.title}
                    src={`${movie.img}`}
                  />
                  <h6>price:{movie.price}$</h6>
                  <button onClick={() => addBasket(movie)}>Add Card</button>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default PremiumMovies;
