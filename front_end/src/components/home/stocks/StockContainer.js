import React from "react";
import SimpleStockCard from "./SimpleStockCard";

export default function StockContainer({ userStocks }) {
  const renderStocks = () => {
    return userStocks.map(stock => {
      return <SimpleStockCard key={stock.id} stock={stock} />;
    });
  };

  return <div className='stock-container'>{renderStocks()}</div>;
}
