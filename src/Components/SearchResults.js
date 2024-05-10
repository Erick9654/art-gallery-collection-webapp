import React from "react";

export const SearchResults = ({results}) => {
    return (
        <div className="art-card-container">
            <div className="art-card-image">
              <img src={results.link} alt={results.name}/>
            </div>
            <div className="card-details">
              <div>{results.name}</div> 
              <div>By</div>
              <h4>{results.artist}</h4>
            </div>
        </div>
    )
}