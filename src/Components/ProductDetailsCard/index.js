import React from "react";
import "./index.css";
import { motion } from "framer-motion";

const ProductDetailsCard = ({ product }) => {
  return (
    <div className="card-holder">
      <motion.div whileHover={{ scale: 1.05 }} className="card">
        <img src={product.image} alt={product.name} />
        <br />
        <span>{product.name}</span>&nbsp;<span>{product.price}</span>
        <button className="remove-btn">Remove</button>
      </motion.div>
    </div>
  );
};

export default ProductDetailsCard;
