import React from "react";
import AddNewProduceForm from "./AddNewProduceForm";
import ProducesList from "./ProducesList";

function ProduceContainer({farmerObj, addNewProduce, producesList}) {
  
  return (
    <div>
      <AddNewProduceForm addNewProduce={addNewProduce} />
      <br/>
      <h3 style={{textAlign: "center"}}>Here Your Posted Produce. You can add more in the form above.</h3>
      <ProducesList farmerObj={farmerObj} producesList={producesList} />
    </div>
  );
}

export default ProduceContainer;