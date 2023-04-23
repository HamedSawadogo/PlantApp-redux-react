import React from "react";
import { addTocart } from "../features/card.sclice";
import { useDispatch } from "react-redux";
import "../styles/Card.css";
import CareScale from "./CareScale";

const Card = ({ plant }) => {
  const dispatch = useDispatch();

  const addToCart = (name, price) => {
    const cartData = { name, price, amount: 1 };
    dispatch(addTocart(cartData));
  };

  return (
    <div key={plant.id} className="lmj-plant-item">
      <img
        className="lmj-plant-item-cover"
        src={plant.cover}
        alt={`${plant.name} cover`}
      />
      <span>{plant.name}</span>
      <div>
        <CareScale careType="water" scaleValue={plant.water} />
        <CareScale careType="light" scaleValue={plant.light} />
      </div>
      <span className="lmj-plant-item-price">{plant.price}€</span>
      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(plant.name, plant.price)}
      >
        Ajouter au Panier
      </button>
    </div>
  );
};

export default Card;
