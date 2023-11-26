import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import FilmPortfolio from "../Pages/Portfolio/FilmPortfolio";
import MainRoot from "../Router/MainRoot";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "film",
        element: <FilmPortfolio />,
      },
    ],
  },
];
