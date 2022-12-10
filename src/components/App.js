import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [farmer, setFarmer] = useState(null);

  useEffect(() => {
    // Farmer autologin
    https://farm-soko-api-production.up.railway.app
    fetch("https://farm-soko-api-production.up.railway.app/me").then((res) => {
      if (res.ok) {
        res.json().then((farmer) => setFarmer(farmer));
      }
    });

  }, []);
  
  return (
    <>
      <NavBar farmer={farmer} setFarmer={setFarmer}/>

      <main>
        {farmer ? (
          <Switch>
            <Route path="/">
              <Home farmer={farmer}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setFarmer={setFarmer} />
            </Route>
            <Route path="/login">
              <Login setFarmer={setFarmer} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;