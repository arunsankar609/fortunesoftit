
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './components/Body';
import SearchAppBar from './components/Header';
import MoviesLists from './components/MoviesLists';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchAppBar />,
    children: [
      {
        path: "/",
        element: <MoviesLists />,
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
