import { Container } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import './MobileSideBar.scss';
import LogoBlack from '../../../Assets/Images/logo.webp';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../../Compnents/Logo/Logo';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../../Redux/Control/HeaderSlice';

import { useState } from 'react';
const MobileSideBar = () => {
  const { menu } = useSelector((state) => state.header);
  const theme = useSelector((state) => state.mode.theme);
  const dispatch = useDispatch();
  const [openSub, setOpenSub] = useState(-1);

  const handleOpen = (index) => {
    setOpenSub((prevState) => (prevState === index ? -1 : index));
  };

  const handleCloseMenu = () => {
    dispatch(closeMenu());
    document.body.classList.remove('no-scroll');
  };
  return (
    <div
      className={`mobile_sideBar ${menu ? 'mobile_sidebar_active' : ''}`}
      data-theme={theme}>
      <Container>
        <div className="mobile_wrapper">
          <div className="mobile_header">
            {theme === 'light' ? (
              <Link to="/">
                <figure className="logo_menu">
                  <img src={LogoBlack} alt="logo" />
                </figure>
              </Link>
            ) : (
              <Logo />
            )}
            <button className="close_mobile_btn" onClick={handleCloseMenu}>
              <IoClose />
            </button>
          </div>
          <div className="mobile_navbar">
            <ul className="mobile_navbar_list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/movie">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/tv-shows">Tv shows</NavLink>
              </li>
              <li>
                <NavLink to="/celebs">Celebs</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li className="mobile_navbar_item">
                <span onClick={() => handleOpen(1)}>
                  Pages {openSub === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
                <ul
                  className={`mobile_submenu_desktop ${
                    openSub == 1 ? 'active_submenu' : ''
                  }`}>
                  <li>
                    <NavLink to="/film">Film Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink>Shop</NavLink>
                  </li>
                  <li>
                    <NavLink>Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </li>
              <li className="mobile_shopping_item">
                <div className="mobile_shopping_icon">
                  <ShoppingCartIcon />
                  <p>0</p>
                </div>
                <NavLink to="/" className="mobile_shopping">
                  Shopping cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileSideBar;
