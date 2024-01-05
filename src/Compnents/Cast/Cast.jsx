import { useSelector } from 'react-redux';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import './Cast.scss';
const Cast = ({ src, name, character }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="cast_card" data-theme={theme}>
      <figure>
        <LazyLoadImg src={src} alt={name} />
      </figure>
      <article>
        <h3>{name}</h3>
        <h6>{character}</h6>
      </article>
    </div>
  );
};

export default Cast;
