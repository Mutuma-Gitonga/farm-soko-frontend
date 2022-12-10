import React from "react";
import Produce from "./Produce";

function ProducesList({producesList}) {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Quantity</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Units</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Unit Price</h3>
          </th>
        </tr>
        {
          producesList.map((produce) => (
            <Produce key={produce.id} produce={produce} />
          ))
        }
      </tbody>
    </table>
  );
}

export default ProducesList;