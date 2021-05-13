import React, { useState } from "react";

export default function LoginSignup({ login }) {
  const [userName, setUserName] = useState("elon");
  const [password, setPassword] = useState("musk");

  const handleSubmit = event => {
    event.preventDefault();
    login(userName, password);
  };

  return (
    <div className='login-signup'>
      LoginSignup
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          User Name:
          <input
            type='text'
            value={userName}
            onChange={event => setUserName(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='text'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
