import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/", element: <Home /> },              
  { path: "/Directors", element: <Directors /> },  
  { path: "/Actors", element: <Actors /> },        
  { path: "/Movie/:id", element: <Movie /> }, 
  { path: "*", element: <ErrorPage /> }
];

export default routes;

