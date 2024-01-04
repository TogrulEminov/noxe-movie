import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './Routes/Routes';
import { fetchDataFromApi } from './Api/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApiConfiguration, getGenres } from './Redux/Control/ApiSlice';
import { ToastContainer } from 'react-toastify';
import BackToTop from './Compnents/BackToTop/BackToTop';
import LoadingTopBar from './Compnents/LoadingTopBar/LoadingTopBar';
function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.mode.theme);
  useEffect(() => {
    document.body.classList.remove('body-dark');
    if (theme === 'light') {
      document.body.classList.add('body-dark');
    }
  }, [theme]);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res?.images.secure_base_url + 'original',
        poster: res?.images.secure_base_url + 'original',
        profile: res?.images.secure_base_url + 'original',
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoint = ['tv', 'movie'];
    let allGneres = {};

    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGneres[item.id] = item));
    });
    dispatch(getGenres(allGneres));
  };
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <LoadingTopBar />
      <RouterProvider router={router} />
      <BackToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
