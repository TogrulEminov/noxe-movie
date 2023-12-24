import './AdvantagesCard.scss';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import { useSelector } from 'react-redux';
const AdvantagesCard = ({ src, title, description }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="advantages_card" data-theme={theme}>
      <figure>
        <LazyLoadImg src={src} width="80px" height="80px" alt={title} />
      </figure>
      <article>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default AdvantagesCard;
