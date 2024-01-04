import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import LoadingTopBar from '../../Compnents/LoadingTopBar/LoadingTopBar';
import MoviesSearchArea from '../../Compnents/MoviesTvSearchArea/MoviesTvSearchArea';
import useFetch from '../../hooks/useFetch'; 
import MoviesBanner from './MoviesBanner/MoviesBanner';
import MoviesCardsArea from './MoviesCardsArea/MoviesCardsArea';
const Movies = () => {
  const {data}=useFetch(`/movie/popular`)
  return (
    <>
      <CustomHelmet title="movies" description="movies,popular movies" />
      <LoadingTopBar/>
      <MoviesBanner />
      <MoviesSearchArea data={data}  list={'movie'} type={'Movie'}/>
      <MoviesCardsArea data={data}/>
    </>
  );
};

export default Movies;
