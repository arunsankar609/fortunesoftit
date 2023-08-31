
import './App.css';
import Body from './components/Body';
import SearchAppBar from './components/Header';
import MoviesLists from './components/MoviesLists';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#080811', minHeight: '100vh' }} >
      <SearchAppBar/>
      <MoviesLists/>
   
    </div>
  );
}

export default App;
