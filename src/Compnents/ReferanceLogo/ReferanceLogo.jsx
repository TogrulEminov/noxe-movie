import { useSelector } from 'react-redux';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import './ReferanceLogo.scss';
const ReferanceLogo = ({ src }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="referance_link"  data-theme={theme}> 
      <img src={src} alt="logo referance" data-theme={theme} />
    </div>
  );
};

export default ReferanceLogo;
