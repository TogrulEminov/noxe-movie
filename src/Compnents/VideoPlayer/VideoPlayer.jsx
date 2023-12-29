import ReactPlayer from 'react-player/youtube';
import './VideoPlayer.scss';
import { IoMdClose } from 'react-icons/io';
const VideoPlayer = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    document.body.classList.remove('no-scroll');
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${show ? 'visible' : ''}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          <IoMdClose />
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
