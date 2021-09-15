import React from "react";
import { useStateValue } from "../0_ContextAPI/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    //remove from cart function
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src="prod1.jpg" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio,
          Up to 30H Total Playback, IPX7 Water Resistance, Super Touch
          Controls,(Raging Red)
        </p>

        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>646.8</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(5)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
