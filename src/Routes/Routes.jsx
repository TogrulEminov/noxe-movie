import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import MainRoot from '../Router/MainRoot';

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
    ],
  },
];
