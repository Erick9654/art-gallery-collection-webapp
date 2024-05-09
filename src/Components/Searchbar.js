import { useState } from "react";


export const Searchbar = ({setResults}) => {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        fetch("https://json-server-template-dej7.onrender.com/art-pieces")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((name) => {
               return (
                 value &&
                  name &&
                  name.name &&
                  name.name.toLowerCase().includes(value) 
                 )
              });
             setResults(results);
            console.log(json);
        });
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div>
            <input placeholder="Search here..." value={input} onChange={(e) =>
                 handleChange(e.target.value)}/>
        </div>
    )
}