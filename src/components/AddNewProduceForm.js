import React, {useState} from "react";

function AddNewProduceForm({addNewProduce}) {
  
  const [formData, setFormData] = useState({
    name: "", 
    quantity: "", 
    units: "", 
    unit_price: "",
    farmer_id: ""
  });

  function handleChange(e) {

    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();

    // fetch("https://farm-soko-api-production.up.railway.app/produce", {
    fetch("https://farm-soko-api-production.up.railway.app/produce", {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(data => addNewProduce(data));
      } else {
        r.json().then((errorData) => console.log(errorData))
      }
    })
    
    setFormData({
      name: "", 
      quantity: "", 
      units: "", 
      unit_price: "",
      farmer_id: ""
    });
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="text" name="name" value={formData.name} placeholder="Produce name" onChange={handleChange} />
          <input type="number" name="quantity" value={formData.quantity} placeholder="Produce quantity" onChange={handleChange} />
          <input type="text" name="units" value={formData.units} placeholder="Units of quantity" onChange={handleChange} />
          <input type="number" name="unit_price" value={formData.unit_price} placeholder="Produce unit price" onChange={handleChange} />
          <input type="number" name="farmer_id" value={formData.farmer_id} placeholder="Enter your farmer ID" onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">Add A New Produce</button>
      </form>
    </div>
  );
}

export default AddNewProduceForm;