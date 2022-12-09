import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  // { farmerConsumerLoggedInStatus, setFarmer || setConsumer, signUpAsConsumer }

  function handleLogoutClick() {
    
    if(props.setFarmer){
      fetch("/farmer_logout", {method: "DELETE"})
      .then((res) => {
        if(res.ok) {
          props.setFarmer(null);
        }
      })
    } else {
      fetch("/consumer_logout", {method: "DELETE"})
      .then((res) => {
        if(res.ok) {
          props.setConsumer(null);
        }
      })
    }
    
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div><h1 style={{fontWeight: "bold", color: "green"}}>FarmSoko&#8482;</h1><p style={{fontWeight: "bold", color: "mediumpurple"}}>A Farmers & Consumers Haven</p></div>
      <div>
        {props.farmerConsumerLoggedInStatus ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;