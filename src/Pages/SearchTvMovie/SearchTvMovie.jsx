import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation, useParams } from 'react-router-dom';
import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import SearchTvMovieHero from './SearchTvMovieHero/SearchTvMovieHero';
import { useSelector } from 'react-redux';
import SearchImageCards from './SearchImageCards/SearchImageCards';

const SearchTvMovie = () => {
  const { search } = useLocation();
  const { mediaType } = useParams();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');
  const region = queryParams.get('regions');
  const adults = queryParams.get('adults');
  const { data } = useFetch(
    `/search/${mediaType}?query=${query}&include_adult=${adults}&region=${region}&page=8`
  );
  const [background, setBackground] = useState('');
  const { url } = useSelector((state) => state.api);
  useEffect(() => {
    const bg =
      url.backdrop +
      `/${data?.results?.[Math.floor(Math.random() * 7)]?.backdrop_path}`;
    setBackground(bg);
  }, [data, url.backdrop]);
  console.log(data);
  return (
    <>
      <CustomHelmet title="search" />
      <SearchTvMovieHero background={background} data={data} />
      <SearchImageCards data={data}/>
    </>
  );
};

export default SearchTvMovie;
