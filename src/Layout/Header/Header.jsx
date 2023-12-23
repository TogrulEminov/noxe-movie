import Container from 'react-bootstrap/Container';
import './Header.scss';
import Logo from '../../Compnents/Logo/Logo';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchHeader from './SearchHeader/SearchHeader';
import { useDispatch } from 'react-redux';
import {
  closeMenu,
  openMenu,
  openSearch,
} from '../../Redux/Control/HeaderSlice';
import MobileSideBar from './MobileSideBar/MobileSideBar';
import { useCallback, useEffect, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import ListSideBar from './ListSideBar/ListSideBar';
const Header = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const handleOpenSearch = () => {
    dispatch(openSearch());
  };
  const [userDrop, setUserDrop] = useState(false);
  const [sideBarCart, setSideBarCart] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (location.pathname === '/film' || location.pathname === '/') {
      document.body.classList.add('bg-dark');
    } else {
      document.body.classList.remove('bg-dark');
    }
  });
  const handleScroll = useCallback(() => {
    const offSet = window.scrollY;
    if (offSet > 150) {
      setScrolled(true);
      setUserDrop(false);
    } else {
      setScrolled(false);
    }
  }, []);
  useEffect(() => {
    if (width > 992) {
      dispatch(closeMenu());
    } else if (width < 992) {
      setSideBarCart(false);
      document.body.classList.remove('no-scroll')
    }
    return;
  }, [dispatch, width]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const resetStateOnPathChange = useCallback(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname) {
      resetStateOnPathChange();
      window.scrollTo(0, 0);
    }
  }, [location.pathname, resetStateOnPathChange]);
  const handleSidebarActive = () => {
    setSideBarCart(true);
    document.body.classList.add('no-scroll');
    setUserDrop(false);
  };
  return (
    <header
      className={`header ${scrolled ? 'sticky-header' : ''} ${
        location.pathname === '/' ? 'main_header' : ''
      }`}>
      <Container>
        <div className="header_wrapper">
          <div className="left_header_content">
            <button className="hamburger" onClick={() => dispatch(openMenu())}>
              <MenuIcon />
            </button>
            <Logo scrolled={scrolled} />
          </div>
          <div className="right_header_content">
            <nav className="header_nav">
              <ul className="header_navbar_list">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="header_navbar_item">
                  <span>
                    Pages <KeyboardArrowDownIcon />
                  </span>
                  <ul className="submenu_desktop">
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/film">Film Portfolio</NavLink>
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
                      <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Login</NavLink>
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
                <li className="header_navbar_item">
                  <span>
                    Blog <KeyboardArrowDownIcon />
                  </span>
                </li>
              </ul>
              <ul className="header_addition_list">
                <li>
                  <button className="shopping" onClick={handleSidebarActive}>
                    <ShoppingCartIcon />
                    <p>0</p>
                  </button>
                </li>
                <li className="user_profile">
                  <button
                    className="user_icon"
                    onClick={() => setUserDrop(!userDrop)}>
                    <PersonIcon />
                  </button>
                  <div
                    className={`user_profile ${userDrop ? 'active_user' : ''}`}>
                    <ul>
                      <li>Profile</li>
                      <li>
                        <button>Logout</button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button onClick={handleOpenSearch}>
                    <SearchIcon />
                  </button>
                  <SearchHeader />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
      <ListSideBar sideBarCart={sideBarCart} setSideBarCart={setSideBarCart} />
      <MobileSideBar />
    </header>
  );
};

export default Header;
