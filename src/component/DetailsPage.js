import React, { useState, useEffect } from "react";
import CurrencyDetails from "./CurrencyDetails.js";
import queryString from "query-string";
import { Link } from "react-router-dom";

function DetailsPage() {

    //takes the current URL and saves the value of coin thats parsed with the string and saves it in token.
    const value = queryString.parse(window.location.search);
    const token = value.coin;

    useEffect(() =>{getCurrencies();},[]);
    useEffect(() =>{getPrice();},[]);

    const [currencyList, setCurrencyList] = useState([]);
    const [price, setPrice] = useState();
    const [inAsync, setInAsync] = useState(false);

    //Fetches the complete list of all cryptocurrencies in the API
    const getCurrencies = async () =>{
        const response = await fetch("https://api.coingecko.com/api/v3/coins/list")
        .then(response => response.json())
        .then(data => 
            setCurrencyList(data));
            setInAsync(true);
    }

    //Fetches the price in danish kroner based on the search criteria
    const getPrice = async () =>{
        const reponse = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=" + token + "&vs_currencies=usd")
        .then(response => response.json())
        .then(data =>{
            if(data[token.toLowerCase()]) {
                setPrice(data[token.toLowerCase()].usd)
            }}
            )};

    //Searches the currency list for the searched currency by filtering through the array, 
    //based on the exact search string in lower case
    const searchCurrency = currencyList.filter(currency =>{
		return currency.name.toLowerCase() === token.toLowerCase();
	})

//If searchCurrency is empty then return the error message to the user
//if it still contains data after filtering, then pass the data onto currencyDetails
if (searchCurrency.length != 0 && inAsync) {
 return (
    <div className="container">
        {searchCurrency.map(currencies =>(
            <CurrencyDetails 
            key={currencies.name}
            name={currencies.name}
            symbol={currencies.symbol}
            value={price}
            />
        ))}
    </div>
  );}else if(searchCurrency.length === 0 && inAsync){
      return(
    <div className="container">
        <p className="error">{token} is an invalid cryptocurrency, <Link className="error" to="/">please return to the search page and try again</Link></p>
    </div>
      )}else{
          return ( 
              <div></div>
          );
      }
}

export default DetailsPage
