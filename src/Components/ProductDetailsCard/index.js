import React, {useState} from "react";
import {plus, minus} from "../../Assets/index";
import "./index.css";

const ProductDetailsCard = ({ product, products }) => {

  const[quantity, setQuantity] = useState(1)
  const[totalPrice, setTotalPrice] = useState(quantity*product.price)
  const productTotal = {...product, quantity, totalPrice}

  const increaseItemQtt = () => {
    setQuantity(quantity +1)
    setTotalPrice((quantity+1)*product.price)
  }

  const decreaseItemQtt = () => {
    setQuantity(quantity - 1)
    setTotalPrice((quantity-1)*product.price)
  }  

  return (
    <div className="card-holder">
      <div className="card">
        <img src={product.image} alt={product.name} />
        <br />
        <span>{product.name}</span>&nbsp;<span>Unit Price: €{product.price}</span>
        
        <div className="button-container">
        <button className='amount-btn' onClick={decreaseItemQtt}>
            <img src={minus} alt=""/>
          </button>
            {quantity}
            <button className='amount-btn' onClick={increaseItemQtt}>
            <img src={plus} alt=""/>
          </button>
          
        </div>
        {totalPrice}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
