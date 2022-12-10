import React, {useState} from "react";

function AddNewProduceForm({addNewProduce}) {
  
  const [formData, setFormData] = useState({
    name: "", 
    quantity: "", 
    units: "", 
    unit_price: ""
  });

  function handleChange(e) {

    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://farm-soko-api-production.up.railway.app/produce", {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
      .then(data => addNewProduce(data));
    
    setFormData({
      name: "", 
      quantity: "", 
      units: "", 
      unit_price: ""
    });
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="text" name="name" value={formData.name} placeholder="name" onChange={handleChange} />
          <input type="number" name="quantity" value={formData.quantity} placeholder="quantity" onChange={handleChange} />
          <input type="text" name="units" value={formData.units} placeholder="units" onChange={handleChange} />
          <input type="number" name="unit_price" value={formData.unit_price} placeholder="unit_price" step="0.01" onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Produce
        </button>
      </form>
    </div>
  );
}

export default AddNewProduceForm;