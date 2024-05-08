import React from "react";

export const SearchResults = ({results}) => {
    return (
        <div>
         <img src={results.link}/>
         <div>{results.name}</div> 
         <div>By</div>
         <div>{results.artist}</div>
        
        </div>
    )
}