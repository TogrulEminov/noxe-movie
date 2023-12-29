import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation, useParams } from 'react-router-dom';
import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import SearchTvMovieHero from './SearchTvMovieHero/SearchTvMovieHero';
import { useSelector } from 'react-redux';
import SearchImageCards from './SearchImageCards/SearchImageCards';
import bgNo from '../../Assets/Images/footer-bg.jpg';
const SearchTvMovie = () => {
  const { search } = useLocation();
  const { mediaType } = useParams();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');
  const region = queryParams.get('regions');
  const adults = queryParams.get('adults');
  const { data } = useFetch(
    `/search/${mediaType}?query=${query || ''} &include_adult=${
      adults || ''
    }&region=${region || ''}&page=8`
  );
  const { url } = useSelector((state) => state.api);
  const [background, setBackground] = useState('');

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
  return (
    <>
      <CustomHelmet title="search" />
      <SearchTvMovieHero
        background={background !== null ? background : bgNo}
        data={data}
      />
      <SearchImageCards data={data} />
    </>
  );
};

export default SearchTvMovie;
