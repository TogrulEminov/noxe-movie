import CloseIcon from '@mui/icons-material/Close';
import './BasketCard.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const BASKET_URL = 'http://localhost:3031/basket';
const BasketCard = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get(BASKET_URL).then((res) => setBasket(res.data));
  }, []);

  const profile = JSON.parse(localStorage.getItem('user'));
  const handleDelete = (id) => {
    axios.delete(`${BASKET_URL}/${id}`);
    return basket.filter((movie) => movie.id != id);
  };

  return (
    <>
      {basket &&
        profile?.id &&
        basket.map((movie) => {
          if (movie[profile?.id]?.userId === profile?.id) {
            return (
              <div className="basket_card" key={movie[profile?.id]?.id}>
                <button onClick={() => handleDelete(movie.id)}>
                  <CloseIcon />
                </button>
                <figure className="basket_image">
                  <img src={movie[profile?.id]?.img} alt="" />
                </figure>
                <article className="basket_content">
                  <h4>
                    <Link to="">{movie[profile?.id]?.title}</Link>
                  </h4>
                  <h6>{movie[profile?.id]?.movieName}</h6>
                  <h6>Price:{movie[profile?.id]?.price}</h6>
                </article>
              </div>
            );
          }
        })}
    </>
  );
};

export default BasketCard;
