import './App.css';
import React, {useState} from 'react';
import ArtCard from './Card';
import NavBar from './Components/NavBar';
import { Searchbar } from './Components/Searchbar';
import {SearchResultsList} from './Components/SearchResultsList'


function App() {
  const [results, setResults] =useState ([])

  function handleDelete(art) {
    console.log("Deleting art:", art);
  };
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
      <div className="search-bar-container">
            <Searchbar setResults={setResults}/>
            <SearchResultsList results={results}/>
        </div>
        <ArtCard onDelete={handleDelete}/>
        
      </body>
    </div>
  );
}

export default App;
