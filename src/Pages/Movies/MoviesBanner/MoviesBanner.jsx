import { useEffect, useState } from 'react';
import './MoviesBanner.scss';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
const MoviesBanner = () => {
  const [background, setBackground] = useState('');
  const { data: upcoming } = useFetch('/movie/upcoming');
  const { url } = useSelector((state) => state.api);
  useEffect(() => {
    const bg =
      url.backdrop +
      upcoming?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [upcoming, url.backdrop]);
  return (
    <section id="movies_banner" style={{ background: `url(${background})` }}>
      <h3>Movies</h3>
    </section>
  );
};

export default MoviesBanner;
