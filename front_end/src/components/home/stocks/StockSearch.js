import React, { useState } from "react";
import StockCard from "./StockCard";
import StockContainer from "./StockContainer";

const baseURL = "https://www.alphavantage.co/query?";
const intraDayTS = "function=TIME_SERIES_INTRADAY&symbol=";
const tSInterval = "&interval=5min";
const apiKey = "&apikey=N1URRPJ42UJODY8Y";

export default function StockSearch({ user }) {
  const [stockObj, setStockObj] = useState({});
  const [ticker, setTicker] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    fetch(baseURL + intraDayTS + ticker + tSInterval + apiKey)
      .then(res => res.json())
      .then(stockObj => setStockObj(stockObj));
  };

  return (
    <div className='stock-search'>
      {!stockObj["Meta Data"] ? (
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Ticker Symbol:
            <input
              type='text'
              value={ticker}
              onChange={event => setTicker(event.target.value)}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      ) : (
        <StockCard user={user} stockObj={stockObj} />
      )}
    </div>
  );
}
