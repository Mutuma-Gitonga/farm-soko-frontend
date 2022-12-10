import React, { useState } from "react";

function SignUp(props) {


  const [farmerName, setFarmerName] = useState("")
  const [farmerTown, setFarmerTown] = useState("")
  const [farmerPhone, setFarmerPhone] = useState("")
  const [farmerUsername, setFarmerUsername] = useState("")
  const [farmerPassword, setFarmerPassword] = useState("")
  const [farmerPassConfirmation, setFarmerPassConfirmation] = useState("")

  const [signUpErrors, setSignUpErrors] = useState([])

  function handleFarmerSignUp(e) {
    e.preventDefault();
    fetch("https://farm-soko-api-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: farmerName,
        town: farmerTown,
        phone: farmerPhone,
        username: farmerUsername,
        password: farmerPassword,
        password_confirmation: farmerPassConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((farmer) => props.setFarmer(farmer));
      }else {
        r.json().then((errorData) => setSignUpErrors(errorData.errors))
      }
    });
  }


  return (
    <div>
      <form onSubmit={handleFarmerSignUp}>
        <h1 style={{fontWeight: "bold", color: "red"}}>Farmer SignUp Form</h1>
        <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={farmerName}
            onChange={(e) => setFarmerName(e.target.value)}
          />
          <label htmlFor="town">Town</label>
          <input
            type="text"
            id="town"
            autoComplete="off"
            value={farmerTown}
            onChange={(e) => setFarmerTown(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            autoComplete="off"
            value={farmerPhone}
            onChange={(e) => setFarmerPhone(e.target.value)}
          />
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
            value={farmerPassword}
            onChange={(e) => setFarmerPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={farmerPassConfirmation}
            onChange={(e) => setFarmerPassConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          {signUpErrors.length > 0 && (
            <ul style={{ color: "red" }}>
              {signUpErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;