import React from "react";
import { useStateValue } from "../0_ContextAPI/StateProvider";
import "./CheckoutPage.css";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutPage() {
  const [{ cart }] = useStateValue();
  return (
    <div>
      <div className="checkout">
        <img className="checkout__ad" src="ad.jpg" alt="" />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Cart is Empty</h2>
            <p>
              You have no items in your cart. To buy items click on "Add to
              Cart".
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {/* list out all of the checkout products */}
            {cart.map((item) => (
              <CheckoutProduct
                item={item.id}
                item={item.title}
                item={item.image}
                item={item.price}
                item={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
