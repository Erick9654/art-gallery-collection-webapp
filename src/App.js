
import './App.css';
import ArtCard from './Card';
import NavBar from './Components/NavBar';
import { Searchbar } from './Components/Searchbar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
        <Searchbar/>
        <ArtCard/>
      </body>
    </div>
  );
}

export default App;
