import React from "react";
import Products from "../2.1_Products/Products";
import "../2_HomePage/Home.css";

function Home() {
  return (
    <div className="home__main">
      <img className="home__bannerimage" src="kiara2.jpg" alt="primebanner" />
      <Products
        id="001"
        title="boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback, IPX7 Water Resistance, Super Touch Controls, Secure Sports Fit & Type-C Port(Raging Red)"
        price="1,999.00"
        rating={5}
      />
    </div>
  );
}

export default Home;
