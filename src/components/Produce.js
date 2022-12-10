import React from "react";

function Produce({produce}) {
  return (
    <tr>
      <td>{produce.name}</td>
      <td>{produce.quantity}</td>
      <td>{produce.units}</td>
      <td>{produce.unit_price}</td>
    </tr>
  );
}

export default Produce;