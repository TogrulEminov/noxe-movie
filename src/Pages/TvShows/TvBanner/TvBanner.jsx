import { useEffect, useState } from 'react';
import './TvBanner.scss';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
const TvBanner = () => {
  const [background, setBackground] = useState('');
  const { data: trending } = useFetch('/trending/tv/day');
  const { url } = useSelector((state) => state.api);
  useEffect(() => {
    const bg =
      url.backdrop +
      trending?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [trending, url.backdrop]);
  return (
    <section id="tv_banner" style={{ background: `url(${background})` }}>
      <h3>Tv shows</h3>
    </section>
  );
};

export default TvBanner;
