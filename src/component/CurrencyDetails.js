import React from "react";

//takes the values and returns an appropriate div for the DetailsPage
const CurrencyDetails = ({name, symbol, value}) =>{

    //if value is empty we assign it to 0
    if (!value) {value = 0};
    return(
        <div>
            <h1>{name}</h1>
            <p>ticker: ({symbol})</p>
            <p>1 {name}({symbol}) = {value} USD</p>
        </div>
    )
}

export default CurrencyDetails