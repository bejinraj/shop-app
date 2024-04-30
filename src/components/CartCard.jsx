import React from "react";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  );
};

export default CartCard;
