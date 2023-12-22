import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './Routes/Routes';
import { fetchDataFromApi } from './Api/api';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGenres } from './Redux/Control/ApiSlice';

function App() {
  const dispatch = useDispatch();
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
