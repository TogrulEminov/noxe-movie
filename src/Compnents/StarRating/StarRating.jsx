import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import './StarRating.scss';
import { useSelector } from 'react-redux';
const StarRating = ({ stars, reviews }) => {
  const theme = useSelector((state) => state.mode.theme);
  const RaitingStar = Array.from({ length: 10 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="star-icon" />
        ) : stars >= number ? (
          <BsStarHalf className="star-icon" />
        ) : (
          <AiOutlineStar className="star-icon" />
        )}
      </span>
    );
  });
  return (
    <div className="starRating" data-theme={theme}>
      {RaitingStar}
      {reviews ? <span className="reviews">({reviews}review)</span> : <></>}
    </div>
  );
};

export default StarRating;
