import React from "react";
import {Link} from "react-router-dom";
import "../../src/App.css";

//contains an array of the search history
let sHistory = [];

//Pushes the latest search on top of the array
export function setSearchHist(search){
  sHistory.push(search);
}

function SearchHistory() {

  const historyStyle = {
    color: "black"
};

//returns a div containing the elements inside the sHistory array which contains the search history.
//then links each list element to the appropriate details page 
  return (
    <div className="container">
        <h1>Search History:</h1>
        {sHistory.map(element =>
          <Link 
          to={'/detailspage?coin='+element} 
          style={historyStyle}>
            <li key={element}>{element}</li>
            </Link>
          )}
    </div>
  );
}

export default SearchHistory