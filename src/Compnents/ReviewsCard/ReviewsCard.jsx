import { useSelector } from 'react-redux';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import './ReviewsCard.scss';
const ReviewsCard = ({ title, desc, img }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="reviews_card">
      <figure className="reviews_image">
        <LazyLoadImg src={img} alt={title} width="150px" height="150px" />
      </figure>
      <article className="reviews_heading"  data-theme={theme}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
    </div>
  );
};

export default ReviewsCard;
