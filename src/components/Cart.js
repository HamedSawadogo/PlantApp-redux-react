import React from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux/es";
import { NavLink } from "react-router-dom";
import CartElement from "./CartElement";
import "../styles/cart.css";

const Cart = () => {
  const cartElements = useSelector((state) => state.cards.cart);

  return (
    <div className="cart-items">
      <Banner>
        <NavLink to={"/"}>
          <img src={logo} alt="logo-la-maison-jungle" className="lmj-logo" />
          <h1 className="lmj-title">La maison jungle</h1>
        </NavLink>
      </Banner>
      <h2>Pannier</h2>
      <div className="cart-container">
        {cartElements?.map((plant) => (
          <CartElement plant={plant} key={plant.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
