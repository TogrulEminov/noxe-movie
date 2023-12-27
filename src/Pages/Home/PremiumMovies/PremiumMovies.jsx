import { Container } from 'react-bootstrap';
import './PremiumMovies.scss';
import SliderCard from '../../../Compnents/SliderCard/SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';

import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
SwiperCore.use([Navigation]);
//
const PREMIUM_MOVIES = 'http://localhost:3031/allMovies';
const BASKET_URL = 'http://localhost:3031/basket';
const PremiumMovies = () => {
  const theme = useSelector((state) => state.mode.theme);
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
  const profile = JSON.parse(localStorage.getItem('user'));
  const addBasket = async (movie) => {
    const userId = profile?.id;
    await axios.post(BASKET_URL, { [userId]: { ...movie, userId } });
    // setCheck((check) => !check);
  };

  return (
    <section id="premium" data-theme={theme}>
      <Container>
        <h5>Premium Movies</h5>
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
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <SliderCard
                  id={movie.id}
                  title={movie.title}
                  src={`${movie.img}`}
                />
                <h6>price:{movie.price}$</h6>
                <button onClick={() => addBasket(movie?.id)}>Add Card</button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default PremiumMovies;
