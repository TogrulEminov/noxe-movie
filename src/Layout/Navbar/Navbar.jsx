import { Container, NavLink } from 'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import Logo from '../../Compnents/Logo/Logo';
import { FaCartShopping } from 'react-icons/fa6';
import './Navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoMenu, IoSearchSharp } from 'react-icons/io5';
import ListSideBar from '../Header/ListSideBar/ListSideBar';
import MobileSideBar from '../Header/MobileSideBar/MobileSideBar';
import { toggleTheme } from '../../Redux/Control/ModeSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchHeader from '../Header/SearchHeader/SearchHeader';
import {
  closeMenu,
  openMenu,
  openSearch,
} from '../../Redux/Control/HeaderSlice';
import { useWindowSize } from '@uidotdev/usehooks';
const Navbar = () => {
  const theme = useSelector((state) => state.mode.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowSize();
  const [userDrop, setUserDrop] = useState(false);
  const [sideBarCart, setSideBarCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //   funtions
  const handleOpenSearch = () => {
    dispatch(openSearch());
  };
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 150) {
      setScrolled(true);
      setUserDrop(false);
    } else {
      setScrolled(false);
    }
  };
  const handleOpenMenu = () => {
    document.body.classList.add('no-scroll');
    dispatch(openMenu());
  };
  const handleSidebarActive = () => {
    setSideBarCart(true);
    document.body.classList.add('no-scroll');
    setUserDrop(false);
  };
  useEffect(() => {
    if (width > 992) {
      dispatch(closeMenu());
    } else if (width < 992) {
      setSideBarCart(false);
    }
    return;
  }, [width]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const resetStateOnPathChange = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    if (location.pathname) {
      resetStateOnPathChange();
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  //   funtions

  // !  Minaye's code
  const profile = JSON.parse(localStorage.getItem('user'));
  //   const [log, setLog] = useState(false);
  const logOut = useCallback(() => {
    localStorage.removeItem('user');
    // setLog((log) => !log);
    navigate('/login');
  }, []);
  return (
    <>
      <header className={`first_header ${scrolled ? 'sticky-header' : ''}`}>
        <Container>
          <div className="header_wrapper">
            <div className="header_left">
              <button className="hamburger" onClick={handleOpenMenu}>
                <IoMenu />
              </button>
              <Logo />
            </div>
            <div className="header_right">
              <nav className="main_nav_link">
                <ul className="main_nav_link_list">
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
                  <li className="nav_items">
                    <h4>
                      Pages <FaAngleDown />
                    </h4>
                    <ul className="submenu_list">
                      <li>
                        <NavLink to="/film">Film Portfolio</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop">Shop</NavLink>
                      </li>
                      <li>
                        <NavLink to="/cart">Cart</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <ul className="addition_list">
                <li className="cart_icon">
                  <button onClick={handleSidebarActive}>
                    <FaCartShopping />
                    <span>0</span>
                  </button>
                </li>
                <li className="user_icon">
                  <button
                    onClick={() => setUserDrop(!userDrop)}
                    className={`${userDrop ? 'active' : ''}`}>
                    <FaUser />
                  </button>

                  <ul
                    className={`user_link_info  ${
                      userDrop ? 'active_user_sub' : ''
                    }`}>
                    {profile ? (
                      <span>
                        <h6>Profile Info</h6>
                        <li>{profile?.name}</li>
                        <li>{profile?.surname}</li>
                        <li>
                          {' '}
                          <button onClick={logOut}>Logout</button>
                        </li>
                      </span>
                    ) : (
                      <>
                        <li>
                          <Link to="/sign-up">Sign up</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
                <li className="search_icon">
                  <button onClick={handleOpenSearch}>
                    <IoSearchSharp />
                  </button>

                  <SearchHeader />
                </li>
                <li className="dark_light_mode">
                  <button onClick={() => dispatch(toggleTheme())}>
                    {theme === 'light' ? (
                      <FiSun className="sun" />
                    ) : (
                      <FiMoon className="moon" />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>
      <ListSideBar sideBarCart={sideBarCart} setSideBarCart={setSideBarCart} />
      <MobileSideBar />
    </>
  );
};

export default Navbar;
