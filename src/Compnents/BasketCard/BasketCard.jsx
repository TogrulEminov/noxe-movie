import CloseIcon from "@mui/icons-material/Close";
import "./BasketCard.scss";
const BasketCard = ({ basket, handleDelete }) => {

  // console.log("basketCard basket", basket);
  return (
    <>
      {basket &&
        basket.map((movie) => {
          // console.log("basket", basket);
          return (
            <>
              <div className="basket_card">
                <button onClick={() => handleDelete(movie)}>
                  <CloseIcon />
                </button>
                <figure className="basket_image">
                  <img src={movie?.img} alt="" />
                </figure>
                <article className="basket_content">
                  {/* <h4>
                    <Link to="">Lorem, ipsum dolor.</Link>
                  </h4> */}
                  <h6>
                    <span>{movie?.movieName}</span>
                    <br />
                    <span>Price:{movie?.price}</span>
                    {/* <span>{movie[profile?.id]?.title}</span> */}
                  </h6>
                </article>
              </div>
            </>
          );
        })}
    </>
  );
};

export default BasketCard;

