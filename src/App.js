import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Searchbar } from './Components/Searchbar';
import { SearchResultsList } from './Components/SearchResultsList';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      
       <div className="Search">
        <div className="search-bar-container">
            <Searchbar setResults={setResults}/>
            <SearchResultsList results={results}/>
        </div>
    </div>
    </div>
  );
}

export default App;
