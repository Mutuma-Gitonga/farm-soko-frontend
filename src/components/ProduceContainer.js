import React from "react";
import SearchProduce from "./SearchProduce";
import AddNewProduceForm from "./AddNewProduceForm";
import ProducesList from "./ProducesList";

function ProduceContainer({searchProduce, addNewProduce, producesList}) {
  
  return (
    <div>
      <SearchProduce searchProduce={searchProduce} />
      <AddNewProduceForm addNewProduce={addNewProduce} />
      <ProducesList producesList={producesList} />
    </div>
  );
}

export default ProduceContainer;