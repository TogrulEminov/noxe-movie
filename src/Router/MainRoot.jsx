import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const MainRoot = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === '/login' || pathname === '/signup' ? <></> : <Header />}

      <Outlet />
      {pathname === '/login' || pathname === '/signup' ? <></> : <Footer />}
    </>
  );
};

export default MainRoot;
