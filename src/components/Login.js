import React, { useState } from "react";

function Login(props) {

  const [farmerUsername, setFarmerUsername] = useState("");
  const [farmerPassword, setFarmerPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([])


  function handleFarmerLoginSubmit(e) {
    e.preventDefault();
    fetch("https://farm-soko-api-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: farmerUsername, 
        password: farmerPassword 
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((farmer) => props.setFarmer(farmer));
      } else {
        r.json().then((errorData) => setLoginErrors(errorData.errors))
      }
    });
  }

  return (
    <div>
        <form onSubmit={handleFarmerLoginSubmit}>
          <h1>Farmer Login Form</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={farmerUsername}
            onChange={(e) => setFarmerUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={farmerPassword}
            onChange={(e) => setFarmerPassword(e.target.value)}
          />
          {loginErrors.length > 0 && (
            <ul style={{ color: "red" }}>
              {loginErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default Login;
