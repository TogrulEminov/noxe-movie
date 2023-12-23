import CloseIcon from '@mui/icons-material/Close';
import './BasketCard.scss';
import { Link } from 'react-router-dom';
const BasketCard = ({ handleDelete }) => {
  return (
    <div className="basket_card">
      <button onClick={handleDelete}>
        <CloseIcon />
      </button>
      <figure className="basket_image">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          alt=""
        />
      </figure>
      <article className="basket_content">
        <h4>
          <Link to="">Lorem, ipsum dolor.</Link>
        </h4>
        <h6>
          <span>price-1 $</span>
        </h6>
      </article>
    </div>
  );
};

export default BasketCard;
