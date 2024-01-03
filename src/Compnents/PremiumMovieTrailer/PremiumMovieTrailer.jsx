import ReactPlayer from 'react-player/youtube';
import { IoMdClose } from 'react-icons/io';
const PremiumMovieTrailer = ({ show, setShow, url }) => {
  const hidePopup = () => {
    setShow(false);
    document.body.classList.remove('no-scroll');
  };
  return (
    <div className={`videoPopup ${show ? 'visible' : ''}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          <IoMdClose />
        </span>
        <ReactPlayer url={url} controls width="100%" height="100%" />
      </div>
    </div>
  );
};

export default PremiumMovieTrailer;
