import React from "react";
import { plus, minus } from "../../Assets/index";
import "./index.css";
import { motion } from "framer-motion";

const ProductDetailsCard = ({
  product,
  addProduct,
  removeProduct,
  removeItem,
}) => {
  return (
    <div className="card-holder">
      <motion.div whileHover={{ scale: 1.05 }} className="card">
        <div className="img-container">
          <img classname="card-img" src={product.image} alt={product.name} />
        </div>
        <div className="card-content">
          <span className="product-name">{product.name}</span>&nbsp;
          <span className="unit-price">
            <strong>Unit Price</strong>: <em>€{product.price}</em>
          </span>
          <div className="button-container">
            <button
              className="amount-btn"
              onClick={() => removeProduct(product.name)}
            >
              -
            </button>
            {product.quantity}
            <button
              className="amount-btn"
              onClick={() => addProduct(product.name)}
            >
              +
            </button>
          </div>
          <button
            className="remove-btn"
            onClick={() => removeItem(product.name)}
          >
            Remove
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailsCard;
