import { Container } from 'react-bootstrap';
import './PremiumMovies.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';

import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PremiumCard from '../../../Compnents/PremiumCard/PremiumCard';
import PremiumMovieTrailer from '../../../Compnents/PremiumMovieTrailer/PremiumMovieTrailer';
SwiperCore.use([Navigation]);
//
const PREMIUM_MOVIES = 'http://localhost:3031/allMovies';
const BASKET_URL = 'http://localhost:3031/basket';
const PremiumMovies = () => {
  const theme = useSelector((state) => state.mode.theme);
  const [movies, setMovies] = useState([]);
  // const [check, setCheck] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
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

  const [show, setShow] = useState(false);
  const handleCardClick = (movieId) => {
    setSelectedMovieId(movieId);
    setShow(true);
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
          autoplay={false}
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
          {movies?.map((movie) => {
            
            return (
              <SwiperSlide key={movie.id}>
                <PremiumCard
                  setShow={setShow}
                  id={movie.id}
                  title={movie.title}
                  src={movie.img}
                  price={movie.price}
                  genres={movie.genres}
                  movieName={movie?.movieName}
                  addBasket={()=>addBasket(movie)}
                  cardClick={() => handleCardClick(movie.id)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <PremiumMovieTrailer
          show={show}
          url={movies.find((movie) => movie.id === selectedMovieId)?.trailer}
          setShow={setShow}
        />
      </Container>
    </section>
  );
};

export default PremiumMovies;
