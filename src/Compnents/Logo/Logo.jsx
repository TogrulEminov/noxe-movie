import './Logo.scss';
import LogoBlack from '../../Assets/Images/logo.webp';
import LogoWhite from '../../Assets/Images/logo-dark.webp';
import { Link, useLocation } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
const Logo = ({ scrolled }) => {
  const { width } = useWindowSize();
  const location = useLocation();
  return (
    <Link to="/">
      <figure className="logo_menu">
        <img
          src={
            width < 992
              ? LogoBlack
              : LogoWhite 
              &&
               scrolled
              ?  LogoWhite
              :LogoBlack
              && location.pathname === '/'
              ? LogoBlack
              : LogoWhite
          }
          alt="logo"
        />
      </figure>
    </Link>
  );
};

export default Logo;
