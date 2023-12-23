import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import MoviesSearchArea from '../../Compnents/MoviesTvSearchArea/MoviesTvSearchArea';
import useFetch from '../../hooks/useFetch';
import './Movies.scss';
import MoviesBanner from './MoviesBanner/MoviesBanner';
import MoviesCardsArea from './MoviesCardsArea/MoviesCardsArea';
const Movies = () => {
  const {data}=useFetch(`/movie/popular`)
  return (
    <>
      <CustomHelmet title="movies" description="movies,popular movies" />
      <MoviesBanner />
      <MoviesSearchArea data={data} />
      <MoviesCardsArea data={data}/>
    </>
  );
};

export default Movies;
