import React, { useState } from "react";

function SignUp(props) {

  // { setFarmer || setConsumer, setSignUpLoginAsConsumer, signUpLoginAsConsumer }
  // displayConsumerSignUpForm

  const [consumerName, setConsumerName] = useState("");
  const [consumerTown, setConsumerTown] = useState("");
  const [consumerPhone, setConsumerPhone] = useState("");
  const [consumerUsername, setConsumerUsername] = useState("");
  const [consumerPassword, setConsumerPassword] = useState("");
  const [consumerPassConfirmation, setConsumerPassConfirmation] = useState("");

  const [farmerName, setFarmerName] = useState("")
  const [farmerTown, setFarmerTown] = useState("")
  const [farmerPhone, setFarmerPhone] = useState("")
  const [farmerUsername, setFarmerUsername] = useState("")
  const [farmerPassword, setFarmerPassword] = useState("")
  const [farmerPassConfirmation, setFarmerPassConfirmation] = useState("")
  
  // const [displayConsumerSignUpForm, setDisplayConsumerSignUpForm] = useState(true);

  function handleConsumerSignUp(e) {
    e.preventDefault();
    fetch("/consumer_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: consumerName,
        town: consumerTown,
        phone: consumerPhone,
        username: consumerUsername,
        password: consumerPassword,
        password_confirmation: consumerPassConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((consumer) => props.setConsumer(consumer));
      }
    });
  }

  function handleFarmerSignUp(e) {
    e.preventDefault();
    fetch("/farmer_signup", {
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
      }
    });
  }

  const handleSignUpToggleClick = () => {
    props.setSignUpLoginAsConsumer((signUpLoginAsConsumer) => !signUpLoginAsConsumer);
    // Does this reroute automatically to the farmer form
    // Maybe I don't need to pass context to parent? 
    // setDisplayConsumerSignUpForm((displayConsumerSignUpForm) => !displayConsumerSignUpForm);
  }

  // SIMPLY CHANGE THE STATE OF CONSUMER SIGNUP TO FALSE TO SHOW FARMER FORM

  return (
    <div>
      { props.signUpLoginAsConsumer ? (
        <form onSubmit={handleConsumerSignUp}>
          <h1 style={{fontWeight: "bold", color: "red"}}>Consumer SignUp Form</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={consumerName}
            onChange={(e) => setConsumerName(e.target.value)}
          />
          <label htmlFor="town">Town</label>
          <input
            type="text"
            id="town"
            autoComplete="off"
            value={consumerTown}
            onChange={(e) => setConsumerTown(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            autoComplete="off"
            value={consumerPhone}
            onChange={(e) => setConsumerPhone(e.target.value)}
          />
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
            value={consumerPassword}
            onChange={(e) => setConsumerPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={consumerPassConfirmation}
            onChange={(e) => setConsumerPassConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">Sign Up</button>
          <br/>
          <span style={{fontWeight: "bold", color: "red"}}>Not a Consumer?</span>
          <button style={{fontWeight: "bold", color: "blue"}} onClick={handleSignUpToggleClick}>Click Here for Farmer SignUp Form</button>
      </form>) : (
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
          <button type="submit">Sign Up</button>
          <br/>
          <span style={{fontWeight: "bold", color: "red"}}>Not a Farmer?</span>
          <button style={{fontWeight: "bold", color: "blue"}} onClick={handleSignUpToggleClick}>Click Here for Consumer SignUp Form</button>
      </form>
      )}
    </div>
  );
}

export default SignUp;