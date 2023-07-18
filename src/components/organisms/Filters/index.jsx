import React, { useState } from "react";

function Filters({ setUrlProducts }) {
  const [inputs, setInputs] = useState({ name: "", price: 500 });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrlProducts(
      `https://api.escuelajs.co/api/v1/products/?price_min=1&price_max=${inputs.price}&title=${inputs.name}`
    );
  };
  return (
    <div style={{ margin: "16px 0px" }}>
      <form onSubmit={handleSubmit}>
        <label
          className="btn"
          onClick={() => {
            setUrlProducts("https://api.escuelajs.co/api/v1/products");
          }}
        >
          Clear Filters
        </label>
        <label>
          Search
          <input
            placeholder="Generic"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Max price: ${inputs.price ? inputs.price : 0}
          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={inputs.price}
            name="price"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Apply" name="" id="" />
      </form>
    </div>
  );
}

export default Filters;
