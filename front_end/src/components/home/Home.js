import React, { useState } from "react";
import StockContainer from "./stocks/StockContainer";
import StockSearch from "./stocks/StockSearch";

export default function Home({ user, logout }) {
  const [userStocks, setUserStocks] = useState([...user.userStocks]);

  const addUserStock = stock => {
    const foundStock = userStocks.find(
      element => element.ticker === stock.ticker
    );
    if (!foundStock) {
      setUserStocks([stock, ...userStocks]);
    }
  };

  const welcomeHome = () => {
    return (
      <h2>
        Hello, {user.username}. Welcome Home! What stock would you like to
        search today?
        <button onClick={() => logout()}>Logout</button>
      </h2>
    );
  };

  return (
    <div className='home'>
      <header className='user-header'>{welcomeHome()}</header>
      <StockSearch addUserStock={addUserStock} user={user} />
      <StockContainer userStocks={userStocks} />
    </div>
  );
}
