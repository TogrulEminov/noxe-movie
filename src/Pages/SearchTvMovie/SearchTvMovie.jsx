import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import SearchTvMovieHero from './SearchTvMovieHero/SearchTvMovieHero';
import { useSelector } from 'react-redux';
import SearchImageCards from './SearchImageCards/SearchImageCards';
import bgNo from '../../Assets/Images/footer-bg.jpg';
import { fetchDataFromApi } from '../../Api/api';
import { Spinner } from 'react-bootstrap';
const SearchTvMovie = () => {
  const { search } = useLocation();
  const { mediaType } = useParams();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');
  const region = queryParams.get('regions');
  const adults = queryParams.get('adults');

  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { url } = useSelector((state) => state.api);
  const [background, setBackground] = useState('');
  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(
      `/search/${mediaType}?query=${query || ''} &include_adult=${
        adults || ''
      }&region=${region || ''}&page=${page}`
    ).then((res) => {
      setData(res);
      setPage((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextData = () => {
    fetchDataFromApi(
      `/search/${mediaType}?query=${query || ''} &include_adult=${
        adults || ''
      }&region=${region || ''}&page=${page}`
    ).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPage((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPage(1);
    fetchInitialData();
  }, [setPage]);
  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      const randomBackdropPath =
        data.results[Math.floor(Math.random() * data.results.length)]
          ?.backdrop_path;

      if (randomBackdropPath) {
        const bg = url.backdrop + '/' + randomBackdropPath;
        setBackground(bg);
      } else {
        setBackground(bgNo);
      }
    } else {
      setBackground(bgNo);
    }
  }, [data, url.backdrop]);

  console.log(data);
  return (
    <>
      {loading && <Spinner initial={true} />}
      <CustomHelmet title="search" />
      <SearchTvMovieHero
        background={background !== null ? background : bgNo}
        data={data}
      />

      <SearchImageCards
        data={data}
        loading={loading}
        fetchNextData={fetchNextData}
      />
    </>
  );
};

export default SearchTvMovie;
