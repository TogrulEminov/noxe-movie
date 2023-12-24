import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './Routes/Routes';
import { fetchDataFromApi } from './Api/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApiConfiguration, getGenres } from './Redux/Control/ApiSlice';

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
