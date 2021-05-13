import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/landing/Login";

function App() {
  const [user, setUser] = useState({});

  const login = (username, password) => {
    fetch("http://localhost:9393/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(user => setUser(user));
  };

  return (
    <div className='App'>
      {!user.id ? <Login login={login} /> : <Home user={user} />}
    </div>
  );
}

export default App;
