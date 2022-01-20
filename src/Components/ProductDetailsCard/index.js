import React from "react";
import "./index.css";

const ProductDetailsCard = ({ product }) => {
  return (
    <div className="card-holder">
      <div className="card">
        <img src={product.image} alt={product.name} />
        <br />
        <span>{product.name}</span>&nbsp;<span>{product.price}</span>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
