import React, { useState, useEffect } from "react";
import ProductDetailsCard from "../ProductDetailsCard";
import divisions from "../../Assets/hackaton.json";
const original = divisions.divisions.office[0].components;

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
      <div className="bloc-tabs">
        {tabs.map((category) => (
          <button
            className={toggleState === category ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="content-tabs">
        {products.length &&
          tabs.map((category) => (
            <div
              className={
                toggleState === category ? "content  active-content" : "content"
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

      <div
        className="prices"
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgb(88, 147, 241)",
        }}
      >
        <span>{basePrice}</span>
        &nbsp;
        <span>{finalPrice}</span>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default ProductList;
