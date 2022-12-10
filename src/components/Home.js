import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import ProduceContainer from "./ProduceContainer";
import AvailableProduce from "./AvailableProduce";

function Home(props) {

  const history = useHistory();

  const [producesList, setProducesList] = useState([]);
  const [updatedProducesList, setUpdatedProducesList] = useState([]);

  // const timestamp = Date.now();
  
  useEffect(() => {
    // fetch("https://farm-soko-api-production.up.railway.app/produce")
    fetch(`https://farm-soko-api-production.up.railway.app/produce`)
      .then((res) => res.json())
        .then(listData => {
          setProducesList(listData)
          setUpdatedProducesList(listData)
          // console.log(listData)
        });
  },[]);

  

  useEffect(() => {
    setUpdatedProducesList(producesList);
  },[producesList]);


  if(props.farmer) {

    history.push('/');

    function addNewProduce(newProduceObj) {
      const updatedProducesList = [...producesList, newProduceObj];
      setProducesList(updatedProducesList);
    }

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2 style={{textAlign: "center", color: "mediumpurple"}}>Welcome, {props.farmer.name}! Your farmer ID is: {props.farmer.id}</h2>
        </div>
        <ProduceContainer farmerObj={props.farmer} producesList={updatedProducesList} addNewProduce={addNewProduce} />
      </div>
    )    

  } else {
    return (
      <>
        <h1 style={{color: "mediumpurple"}}>Please Login Or SignUp as a farmer to post your produce.</h1>
        <h2 style={{textAlign: "center"}}>Contact a farmer to buy any of the produce listed below: </h2>
        <table style={{border: "2px solid black", marginLeft: "auto",  marginRight: "auto"  }} >
          <tbody>
            <tr>
            <th style={{border: "2px solid black"}}>
                <h3>ID</h3>
              </th>
              <th style={{border: "2px solid black"}}>
                <h3>Name</h3>
              </th>
              <th style={{border: "2px solid black"}}>
                <h3>Quantity</h3>
              </th>
              <th style={{border: "2px solid black"}}>
                <h3>Units</h3>
              </th>
              <th style={{border: "2px solid black"}}>
                <h3>Unit Price</h3>
              </th>
              <th style={{border: "2px solid black"}}>
                <h3>Farmer Name</h3>
              </th>
              <th style={{border: "2px solid black"}}>
                <h3>Farmer Town</h3>
              </th>
              <th style={{border: "2px solid black"}}>
                <h3>Farmer Phone</h3>
              </th>
            </tr>
            {
              producesList.map((produce) => (
                <AvailableProduce key={produce.id} produce={produce} />
              ))
            }
          </tbody>
        </table>
      </>
      
    )
  }
}

export default Home;