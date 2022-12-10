import React from "react";
import Produce from "./Produce";

function ProducesList({farmerObj, producesList}) {

  return (
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
            <Produce key={produce.id} produce={produce} farmerObj={farmerObj} />
          ))
        }
      </tbody>
    </table>
  );
}

export default ProducesList;