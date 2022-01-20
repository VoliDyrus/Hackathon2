import React, { useState } from "react";
import ProductDetailsCard from "../ProductDetailsCard";
import divisions from "../../Assets/hackaton.json";

const ProductList = () => {
  const [toggleState, setToggleState] = useState("Furniture");
  const [tabs, setTabs] = useState(
    Object.keys(divisions.divisions.office[0].components)
  );
  const [products, setProducts] = useState([
    divisions.divisions.office[0].components,
  ]);
  console.log(products)
  const toggleTab = (category) => {
    setToggleState(category);
  };

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
        {tabs.map((category) => (
          <div
            className={
              toggleState === category ? "content  active-content" : "content"
            }
          >
            {products[0][category].map((elt) => (
              <ProductDetailsCard product={elt} products={products} />
            ))}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
