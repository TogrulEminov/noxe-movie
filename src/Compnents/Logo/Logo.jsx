import './Logo.scss';
import LogoBlack from '../../Assets/Images/logo.webp';
import LogoWhite from '../../Assets/Images/logo-dark.webp';
import { Link, useLocation } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
import { useSelector } from 'react-redux';
const Logo = ({ scrolled }) => {
  const { width } = useWindowSize();
  const location = useLocation();

  return (
    <Link to="/">
      <figure className="logo_menu">
        <img src={LogoWhite} alt="logo"    />
      </figure>
    </Link>
  );
};

export default Logo;
