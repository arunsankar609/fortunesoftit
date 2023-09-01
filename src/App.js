
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './components/Body';
import SearchAppBar from './components/Header';
import MoviesLists from './components/MoviesLists';
import MovieDetails from './components/MovieDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchAppBar />,
    children: [
      {
        path: "/",
        element: <MoviesLists />,
      },
       {
        path: "/myDesign",
        element: <Body />,
      },
       {
        path: "/movieDetails/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black', minHeight: '100vh' }} >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
