import React from "react";
import { SearchResults } from "./SearchResults";

export const SearchResultsList = ({results}) => {
    return <div>
         {
            results.map((results, id) => {
                return < SearchResults results={results} key={id} />
            })
         }
    </div>
    
};