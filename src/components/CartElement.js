import React, { useState } from "react";
import "../styles/cartElement.css";
const CartElement = ({ plant }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="cart-element">
      <img
        className="cart-cover"
        src={plant.cover}
        alt={`${plant.name} cover`}
      />
      <span>{plant.name}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <span className="lmj-plant-item-price">{plant.price * quantity}€</span>
      <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
        -
      </button>
    </div>
  );
};

export default CartElement;
