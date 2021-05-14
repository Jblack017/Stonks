import React from "react";

export default function SimpleStockCard({ stock }) {
  console.log(stock.id);
  return (
    <div className='simple-stock-card'>
      <h3>{stock.ticker.toUpperCase()}</h3>
      <p>Open: ${stock.open}</p>
      <p>Close: ${stock.close}</p>
      <p>High: ${stock.high}</p>
      <p>Low: ${stock.low}</p>
    </div>
  );
}
