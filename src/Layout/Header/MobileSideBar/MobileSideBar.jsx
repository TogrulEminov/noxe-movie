import { Container } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close';
import './MobileSideBar.scss';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../../Compnents/Logo/Logo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../../Redux/Control/HeaderSlice';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
const MobileSideBar = () => {
  const { menu } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const [openSub, setOpenSub] = useState(-1);

  const handleOpen = (index) => {
    setOpenSub((prevState) => (prevState === index ? -1 : index));
  };
  return (
    <div className={`mobile_sideBar ${menu ? 'mobile_sidebar_active' : ''}`}>
      <Container>
        <div className="mobile_wrapper">
          <div className="mobile_header">
            <Logo />
            <button
              className="close_mobile_btn"
              onClick={() => dispatch(closeMenu())}>
              <CloseIcon />
            </button>
          </div>
          <div className="mobile_navbar">
            <ul className="mobile_navbar_list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mobile_navbar_item">
                <span onClick={() => handleOpen(1)}>
                  Pages{' '}
                  {openSub === 1 ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </span>
                <ul
                  className={`mobile_submenu_desktop ${
                    openSub == 1 ? 'active_submenu' : ''
                  }`}>
                  <li>
                    <NavLink>History</NavLink>
                  </li>
                  <li>
                    <NavLink>TimeLine</NavLink>
                  </li>
                  <li>
                    <NavLink>Shop</NavLink>
                  </li>
                  <li>
                    <NavLink>My Account</NavLink>
                  </li>
                  <li>
                    <NavLink>Cart</NavLink>
                  </li>
                  <li>
                    <NavLink>Checkout</NavLink>
                  </li>
                  <li>
                    <NavLink>Team</NavLink>
                  </li>
                  <li>
                    <NavLink>Awards</NavLink>
                  </li>
                  <li>
                    <NavLink>Contact</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="">Movies</NavLink>
              </li>
              <li>
                <NavLink to="">Tv Shows</NavLink>
              </li>
              <li>
                <NavLink to="">Celebs</NavLink>
              </li>
              <li className="mobile_navbar_item">
                <span onClick={() => handleOpen(2)}>
                  Blog{' '}
                  {openSub === 2 ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </span>
                <ul
                  className={`mobile_submenu_desktop ${
                    openSub == 2 ? 'active_submenu' : ''
                  }`}></ul>
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
