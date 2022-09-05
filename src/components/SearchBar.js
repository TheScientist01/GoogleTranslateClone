
import React, { useEffect } from "react";


const SearchBar = ({createList}) => {

    useEffect(() => {
        createList("");
    },[]);

    const onC = (event) => {
        var term = event.target.value;
        createList(term);
    }

    return <input onChange={(e) => onC(e)} type={"text"} style={{ outline: "none", border: "none", fontSize: "17px", width: "90%" }} className="ml-4" placeholder="Seach languages"></input>
}


export default SearchBar;