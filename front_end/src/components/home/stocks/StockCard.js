import React from "react";
import MyChart from "./MyChart";

export default function StockCard({
  stockObj,
  user,
  addUserStock,
  clearStockObj,
}) {
  const stockSym = stockObj["Meta Data"]["2. Symbol"];
  const lastRefreshed = stockObj["Meta Data"]["3. Last Refreshed"];

  const stockPreviousOpen =
    stockObj["Time Series (5min)"][
      `${Object.keys(stockObj["Time Series (5min)"])[0]}`
    ]["1. open"];

  const stockPreviousClose =
    stockObj["Time Series (5min)"][
      `${Object.keys(stockObj["Time Series (5min)"])[0]}`
    ]["4. close"];

  const stockPreviousLow =
    stockObj["Time Series (5min)"][
      `${Object.keys(stockObj["Time Series (5min)"])[0]}`
    ]["3. low"];

  const stockPreviousHigh =
    stockObj["Time Series (5min)"][
      `${Object.keys(stockObj["Time Series (5min)"])[0]}`
    ]["2. high"];

  const stockPreviousVol =
    stockObj["Time Series (5min)"][
      `${Object.keys(stockObj["Time Series (5min)"])[0]}`
    ]["5. volume"];

  const userStonk = {
    stock: {
      ticker: stockSym,
      last_updated: lastRefreshed,
      low: stockPreviousLow,
      high: stockPreviousHigh,
      open: stockPreviousOpen,
      close: stockPreviousClose,
    },
    user: { user_id: user.id },
  };

  const handleClick = () => {
    fetch("http://localhost:9393/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userStonk),
    }).then(addUserStock(userStonk.stock));
  };

  return (
    <div className='stock-card'>
      <MyChart stockSym={stockSym} stockObj={stockObj["Time Series (5min)"]} />
      <div className='search-contents'>
        <button onClick={() => handleClick()}>Like</button>
        <button onClick={() => clearStockObj()}>reset</button>
        <p>Open: ${stockPreviousOpen}</p>
        <p>Close: ${stockPreviousClose}</p>
        <p>High: ${stockPreviousLow}</p>
        <p>Low: ${stockPreviousHigh}</p>
        <p>Volume: {stockPreviousVol}</p>
      </div>
    </div>
  );
}
