import React from "react";
import "./Products.css";

function Products({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <div>
        <img scr="prod1.jpg" alt="prod1" />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Products;
