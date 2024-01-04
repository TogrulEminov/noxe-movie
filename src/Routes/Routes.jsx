import About from '../Pages/About/About';
import Detail from '../Pages/Detail/Detail';
import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movies/Movies';
import FilmPortfolio from '../Pages/Portfolio/FilmPortfolio';
import Login from '../Pages/Registration/Login/Login';
import SignUp from '../Pages/Registration/SignUp/SignUp';
import MainRoot from '../Router/MainRoot';
import SearchTvMovie from '../Pages/SearchTvMovie/SearchTvMovie';
import TvShows from '../Pages/TvShows/TvShows';
import NotFound from '../Pages/NotFound/NotFound';
import NotRoot from '../Router/NotRoot';
import WishList from '../Pages/WishList/WishList';

export const ROUTES = [
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'film',
        element: <FilmPortfolio />,
      },
      {
        path: ':mediaType/:movie_id',
        element: <Detail />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'tv-shows',
        element: <TvShows />,
      },
      {
        path: 'search/:mediaType',
        element: <SearchTvMovie />,
      },
      {
        path: 'wishlist',
        element: <WishList />,
      },
    ],
  },
  {
    path: '/',
    element: <NotRoot />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
