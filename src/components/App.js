import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [farmer, setFarmer] = useState(null);
  const [isFarmer, setIsFarmer] = useState(false);
  const [consumer, setConsumer] = useState(null);
  const [isConsumer, setIsConsumer] = useState(false);

  const [signUpLoginAsConsumer, setSignUpLoginAsConsumer] = useState(true);
  

  const farmerAndConsumerLoggedInStates = (farmer, consumer) => {
      // Set boolean value using farmer logged in status
      farmer ? setIsFarmer(true) : setIsFarmer(false);
      // Set boolean value using consumer logged in status
      consumer ? setIsConsumer(true) : setIsConsumer(false); 
  }

  useEffect(() => {
    // allows auto login for farmers
    // checks if session exists by checking response ok
    // then sets farmer state to determine.. 
    // .. if router-dom shall switch to home page or switch to
    fetch("/farmer").then((res) => {
      if (res.ok) {
        res.json().then((farmer) => setFarmer(farmer));
      }
    });
    
    fetch("/consumer").then((res) => {
      if (res.ok) {
        res.json().then((consumer) => setConsumer(consumer));
      }
    });

    farmerAndConsumerLoggedInStates(farmer, consumer);

  }, []);

  // useEffect(() => {
  //    // Set boolean value using farmer logged in status
  //    farmer ? setIsFarmer(true) : setIsFarmer(false);
  //    // Set boolean value using consumer logged in status
  //    consumer ? setIsConsumer(true) : setIsConsumer(false); 
  // },[farmer, consumer])

  // let conditionalRoute;
  let conditionalHomeComponent;
  let farmerConsumerLoggedInStatus; 
  switch(true) {
    case isFarmer === true && isConsumer === true:
      fetch("/farmer_logout", {method: "DELETE"})
      .then((res) => {
        if(res.ok) {
          setFarmer(null);
        }
      })
      
      fetch("/consumer_logout", {method: "DELETE"})
      .then((res) => {
        if(res.ok) {
          setConsumer(null);
        }
      })

      // setNoneLoggedIn(true);
      farmerConsumerLoggedInStatus = false; 

      break;

    case isFarmer === true:
      // conditionalRoute = "/farmer_home";
      conditionalHomeComponent = <Home farmer={farmer}/>;
      farmerConsumerLoggedInStatus = true;
      break;
    
    case isConsumer === true: 
      // conditionalRoute = "/consumer_home";
      conditionalHomeComponent = <Home consumer={consumer}/>;
      farmerConsumerLoggedInStatus = true;
      break;
    
    default:
      farmerConsumerLoggedInStatus = false;
      break;
  }
  
  return (
    <>
      {farmerConsumerLoggedInStatus ? (
        isFarmer ? (
          <NavBar farmerConsumerLoggedInStatus={farmerConsumerLoggedInStatus} setFarmer={setFarmer}/>
        ) : (
          <NavBar farmerConsumerLoggedInStatus={farmerConsumerLoggedInStatus} setConsumer={setConsumer}/>
        )
      ) : (
        <NavBar farmerConsumerLoggedInStatus={farmerConsumerLoggedInStatus}/>
      )}
      
      <main>
        {farmerConsumerLoggedInStatus ? (
            <Switch>
              <Route path="/">
                {conditionalHomeComponent}
              </Route>
            </Switch>
        ) : (
            <>
              {signUpLoginAsConsumer ? (
                <Switch>
                  <Route path="/signup">
                    <SignUp setSignUpLoginAsConsumer={setSignUpLoginAsConsumer} signUpLoginAsConsumer={signUpLoginAsConsumer} setConsumer={setConsumer} />
                  </Route>
                  <Route path="/login">
                    <Login setSignUpLoginAsConsumer={setSignUpLoginAsConsumer} signUpLoginAsConsumer={signUpLoginAsConsumer} setConsumer={setConsumer} />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
                ) : (
                  <Switch>
                  <Route path="/signup">
                    <SignUp setSignUpLoginAsConsumer={setSignUpLoginAsConsumer} signUpLoginAsConsumer={signUpLoginAsConsumer} setFarmer={setFarmer} />
                  </Route>
                  <Route path="/login">
                    <Login setSignUpLoginAsConsumer={setSignUpLoginAsConsumer} signUpLoginAsConsumer={signUpLoginAsConsumer} setFarmer={setFarmer} />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              )}
            </>
        )}
      </main>
    </>
  );
}

export default App;