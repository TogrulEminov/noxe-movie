import './Logo.scss';
import LogoBlack from '../../Assets/Images/logo.webp';
import LogoWhite from '../../Assets/Images/logo-dark.webp';
import { Link } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
const Logo = () => {
  const { width } = useWindowSize();
  return (
    <Link to="/">
      <figure className="logo_menu">
        <img src={width < 992 ? LogoBlack : LogoWhite} alt="logo" />
      </figure>
    </Link>
  );
};

export default Logo;
