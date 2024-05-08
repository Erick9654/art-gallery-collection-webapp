import './App.css';
import { useState } from "react";
import { Searchbar } from './Components/Searchbar';
import { SearchResultsList } from './Components/SearchResultsList';
import NavBar from './Components/NavBar';
import ArtCard from './Card';

function App() {
  const [results, setResults] = useState([]);

function handleDelete(art) {
    console.log("Deleting art:", art);
  };

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
        <div className="Search">
          <div className="search-bar-container">
              <Searchbar setResults={setResults}/>
              <SearchResultsList results={results}/>
              
          </div>
      </div>
      <ArtCard onDelete={handleDelete} />
    </body>
    </div>
  );
}

export default App;
