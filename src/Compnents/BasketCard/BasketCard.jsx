import CloseIcon from "@mui/icons-material/Close";
import "./BasketCard.scss";
import { Link } from "react-router-dom";
const BasketCard = ({ basket, handleDelete }) => {
  // console.log("basketCard basket", basket);
  return (
    <>
      {basket &&
        basket.map((movie) => {
          // console.log("basket", basket);
          return (
            <>
              <div className="basket_card" key={movie?.id}>
                <button onClick={() => handleDelete(movie?.id)}>
                  <CloseIcon />
                </button>
                <figure className="basket_image">
                  <img src={movie?.img} alt="" />
                </figure>
                <article className="basket_content">
                  <h4>
                    <Link to="">{movie?.title}</Link>
                  </h4>
                  <h6>{movie?.movieName}</h6>
                  <h6>Price:{movie?.price}</h6>
                </article>
              </div>
            </>
          );
        })}
    </>
  );
};

export default BasketCard;
