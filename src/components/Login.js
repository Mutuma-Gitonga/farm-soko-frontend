import React, { useState } from "react";

function Login(props) {
  // { setSignUpLoginAsConsumer, signUpLoginAsConsumer, setFarmer || setConsumer }

  const [consumerUsername, setConsumerUsername] = useState("");
  const [consumerPassword, setConsumerPassword] = useState("");

  const [farmerUsername, setFarmerUsername] = useState("");
  const [farmerPassword, setFarmerPassword] = useState("");

  function handleConsumerLoginSubmit(e) {
    e.preventDefault();
    fetch("/consumer_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: consumerUsername, 
        password: consumerPassword 
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((consumer) => props.setConsumer(consumer));
      }
    });
  }

  function handleFarmerLoginSubmit(e) {
    e.preventDefault();
    fetch("/farmer_login", {
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
        r.json().then((consumer) => props.setConsumer(consumer));
      }
    });
  }

  const handleLoginToggleClick = () => {
    props.setSignUpLoginAsConsumer((signUpLoginAsConsumer) => !signUpLoginAsConsumer);
  }

  return (
    <div>
      {props.signUpLoginAsConsumer ? (
        <form onSubmit={handleConsumerLoginSubmit}>
          <h1>Consumer Login Form</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={consumerUsername}
            onChange={(e) => setConsumerUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={consumerPassword}
            onChange={(e) => setConsumerPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <br/>
          <span style={{fontWeight: "bold", color: "red"}}>Not a Consumer?</span>
          <button style={{fontWeight: "bold", color: "blue"}} onClick={handleLoginToggleClick}>Click Here for Farmer Login Form</button>
        </form>) : (
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
          <button type="submit">Login</button>
          <br/>
          <span style={{fontWeight: "bold", color: "red"}}>Not a Farmer?</span>
          <button style={{fontWeight: "bold", color: "blue"}} onClick={handleLoginToggleClick}>Click Here for Consumer Login Form</button>
        </form>
      )}
    </div>
  );
}

export default Login;
