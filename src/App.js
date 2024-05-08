import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Searchbar } from './Components/Searchbar';
import { SearchResultsList } from './Components/SearchResultsList';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
