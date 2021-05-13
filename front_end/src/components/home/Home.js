import React, { useState } from "react";
import StockContainer from "./stocks/StockContainer";
import StockSearch from "./stocks/StockSearch";

export default function Home({ user }) {
  const welcomeHome = () => {
    return (
      <h2>
        `Hello, {user.username}. Welcome Home! What would you like to do today?`
      </h2>
    );
  };

  return (
    <div>
      <header className='user-header'>{welcomeHome()}</header>
      <StockSearch user={user} />
      <StockContainer user={user} />
    </div>
  );
}
