import CloseIcon from "@mui/icons-material/Close";
import "./BasketCard.scss";
import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";
const BASKET_URL = "http://localhost:3031/basket";
const BasketCard = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get(BASKET_URL).then((res) => setBasket(res.data));
  }, [basket]);

  
  const profile = JSON.parse(localStorage.getItem("user"));
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
              <>
                <div className="basket_card">
                  <button onClick={() => handleDelete(movie.id)}>
                    <CloseIcon />
                  </button>
                  <figure className="basket_image">
                    <img src={movie[profile?.id]?.img} alt="" />
                  </figure>
                  <article className="basket_content">
                    <h4>
                      <Link to="">Lorem, ipsum dolor.</Link>
                    </h4>
                    <h6>
                      <span>{movie[profile?.id]?.movieName}</span>
                      <br />
                      <span>Price:{movie[profile?.id]?.price}</span>
                      {/* <span>{movie[profile?.id]?.title}</span> */}
                    </h6>
                  </article>
                </div>
              </>
            );
          }
        })}
    </>
  );
};

export default BasketCard;
