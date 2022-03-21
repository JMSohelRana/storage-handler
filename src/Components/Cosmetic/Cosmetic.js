import React from "react";

import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;
  const addToCart = (id) => console.log("Item ", id, " added");
  return (
    <div className="product">
      <h3>name: {name}</h3>
      <p>ID: {id}</p>
      <h6>price: ${price}</h6>
      <button className="cursor" onClick={() => addToCart(id)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Cosmetic;
