import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import LoadingTopBar from '../../Compnents/LoadingTopBar/LoadingTopBar';
import MoviesSearchArea from '../../Compnents/MoviesTvSearchArea/MoviesTvSearchArea';
import useFetch from '../../hooks/useFetch';
import TvBanner from './TvBanner/TvBanner';
import TvCardsArea from './TvCardsArea/TvCardsArea';

const TvShows = () => {
  const { data } = useFetch(`/trending/tv/day`);
  return (
    <>
      <LoadingTopBar />
      <CustomHelmet title="Tv shows" description="tv,trendig tv shows" />
      <TvBanner />
      <MoviesSearchArea data={data} list="tv" type="Tv" />
      <TvCardsArea data={data} />
    </>
  );
};

export default TvShows;
