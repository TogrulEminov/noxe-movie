import { useSelector } from 'react-redux';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import './Videos.scss';
const Videos = ({ src, title, onClick }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="videos" data-theme={theme}>
      <figure>
        <LazyLoadImg src={src} alt={title} />
      </figure>
      <button onClick={onClick}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="80px"
          height="80px"
          viewBox="0 0 213.7 213.7"
          enableBackground="new 0 0 213.7 213.7"
          xmlSpace="preserve">
          <polygon
            className="triangle"
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
          <circle
            className="circle"
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            cx="106.8"
            cy="106.8"
            r="103.3"></circle>
        </svg>
      </button>
      <h3>{title ? title : "No name"}</h3>
    </div>
  );
};

export default Videos;
