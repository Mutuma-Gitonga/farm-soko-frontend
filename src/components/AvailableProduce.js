import React from "react";

function AvailableProduce({produce}) {
  
  
  return (
      <tr>
      <td style={{border: "2px solid black"}}>{produce.id}</td>
      <td style={{border: "2px solid black"}}>{produce.name}</td>
      <td style={{border: "2px solid black"}}>{produce.quantity}</td>
      <td style={{border: "2px solid black"}}>{produce.units}</td>
      <td style={{border: "2px solid black"}}>{produce.unit_price}</td>
      <td style={{border: "2px solid black"}}>{produce.farmer.name}</td>
      <td style={{border: "2px solid black"}}>{produce.farmer.town}</td>
      <td style={{border: "2px solid black"}}>{produce.farmer.phone}</td>
    </tr>
  );

}

export default AvailableProduce;