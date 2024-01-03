import { Link } from 'react-router-dom';
import './PremiumCard.scss';
import { FaHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import { PiSwatchesFill } from 'react-icons/pi';
const PremiumCard = ({
  src,
  movieName,
  title,
  setShow,
  price,
  addBasket,
  id,
  genres,
  cardClick,
}) => {
  return (
    <>
      <div className="premiumCard">
        <figure className="premium_film_image">
          <LazyLoadImg src={src} alt={title} />
        </figure>
        <article className="premium_film_content">
          <ul className="premium_film_genres">
            <li>{genres}</li>
          </ul>
          <h4 title={`${movieName || title}`}>
            <Link to={`/premium-movie/${id}`}>{movieName || title}</Link>
          </h4>
          <span className="premium_brand">Price: {price.toFixed(2)}$</span>
          <ul className="wishlist_add_cart">
            <li>
              <button
                onClick={() => {
                  setShow(true), cardClick();
                }}>
                <PiSwatchesFill />
              </button>
            </li>
            <li>
              <button>
                <FaHeart />
              </button>
            </li>
            <li>
              <button onClick={() => addBasket(id)}>
                <SlBasket />
              </button>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default PremiumCard;
