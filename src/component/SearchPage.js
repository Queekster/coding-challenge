import React, { useEffect, useState } from "react";
import "../../src/App.css";
import {Link, useHistory} from "react-router-dom";
import SearchHistory, {setSearchHist} from "./SearchHistory";

function SearchPage() {

  let history = useHistory();
  const[search, setSearch] = useState("");

  //changes the search value onChange in the text input to make sure it updates
  const searchUpdate = e =>{
  setSearch(e.target.value);
}

//pushes the search text onSubmit onto the history stack
const startSearch = e =>{
  setSearchHist(search);
  history.push('/detailspage?coin=' + search);
}

return (
    <div className="searchContainer">
        <form onSubmit={startSearch}>
          <input className="searchBar" type="text" value={search} onChange={searchUpdate}/>
          <button className="searchButton" type="submit">Search</button>
        </form>
    </div>
  );
}

export default SearchPage