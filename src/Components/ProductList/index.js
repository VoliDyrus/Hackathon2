import React, { useState, useEffect } from "react";
import ProductDetailsCard from "../ProductDetailsCard";
import divisions from "../../Assets/hackaton.json";
import DescriptionSection from "../Description";
import { motion } from "framer-motion";

import "./style.css";
const original = divisions.divisions.office[0].components;

const btnVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const ProductList = () => {
  const [toggleState, setToggleState] = useState("Furniture");
  const [tabs, setTabs] = useState(original.types);
  const [products, setProducts] = useState(original.products);
  const [basePrice, setBasePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const toggleTab = (category) => {
    setToggleState(category);
  };

  const totalAmount = (array) => {
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity;
    return array.reduce(reducer, 0).toFixed(2);
  };

  const addProduct = (index) => {
    const changedProduct = [...products];
    changedProduct[index].quantity += 1;
    setProducts(changedProduct);
  };

  const removeProduct = (index) => {
    const changedProduct = [...products];
    if (changedProduct[index].quantity > 0) changedProduct[index].quantity -= 1;
    setProducts(changedProduct);
  };

  const removeItem = (name) => {
    setProducts((prev) => {
      return prev.filter((elt) => elt.name !== name);
    });
  };

  useEffect(() => {
    setBasePrice(totalAmount(products));
    setFinalPrice(totalAmount(products));
  }, []);

  useEffect(() => {
    setFinalPrice(totalAmount(products));
  }, [products]);

  console.log(products, basePrice, finalPrice);
  return (
    <div className="product-list">
      <DescriptionSection />
      <hr />
      <h3 className="title-product">Products Included</h3>
      <div className="bloc-tabs2">
        {tabs.map((category) => (
          <button
            className={toggleState === category ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="content-tabs2">
        {products.length &&
          tabs.map((category) => (
            <div
              className={
                toggleState === category
                  ? "content  active-content2"
                  : "content"
              }
            >
              {products
                .filter((product) => product.type === category)
                .map((elt, index) => (
                  <ProductDetailsCard
                    product={elt}
                    removeProduct={removeProduct}
                    addProduct={addProduct}
                    removeItem={removeItem}
                    index={index}
                  />
                ))}
            </div>
          ))}
      </div>

      <div className="prices">
        <span className="base-price">
          <strong>Base Price:</strong> ${basePrice}
        </span>
        &nbsp;
        <span className="final-price">
          <strong>Total Price:</strong>
          <div className="price-total">
            <strong>${finalPrice}</strong>
          </div>
        </span>
      </div>
      <motion.button
        variants={btnVariant}
        whileHover={"hover"}
        className="add-cart"
      >
        <strong>Add all to Cart</strong>
      </motion.button>
      <hr />
    </div>
  );
};

export default ProductList;
