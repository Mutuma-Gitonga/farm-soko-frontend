import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {

  function handleLogoutClick() {
    
    fetch("https://farm-soko-api-production.up.railway.app/logout", {method: "DELETE"})
      .then((res) => {
        if(res.ok) {
          props.setFarmer(null);
        }
    });
    
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div><h1 style={{fontWeight: "bold", color: "green"}}>FarmSoko&#8482;</h1><p style={{fontWeight: "bold", color: "mediumpurple", fontSize: "1.2em"}}>The Fresh Organic Food Market!</p></div>
      <div>
        {props.farmer ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Farmer Signup</Link>
            <Link to="/login">Farmer Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;