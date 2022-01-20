import React from "react";
import { plus, minus } from "../../Assets/index";
import "./index.css";

const ProductDetailsCard = ({
  product,
  addProduct,
  removeProduct,
  removeItem,
  index,
}) => {
  return (
    <div className="card-holder">
      <div className="card">
        <img src={product.image} alt={product.name} />
        <br />
        <span>{product.name}</span>&nbsp;
        <span>Unit Price: €{product.price}</span>
        <div className="button-container">
          <button className="amount-btn" onClick={() => removeProduct(index)}>
            <img src={minus} alt="" />
          </button>
          {product.quantity}
          <button className="amount-btn" onClick={() => addProduct(index)}>
            <img src={plus} alt="" />
          </button>
        </div>
        <button className="remove-btn" onClick={() => removeItem(product.name)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
