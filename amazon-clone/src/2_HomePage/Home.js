import React from "react";
import Products from "../2.1_Products/Products";
import "../2_HomePage/Home.css";

function Home() {
  return (
    <div className="home__main">
      <img className="home__bannerimage" src="kiara2.jpg" alt="primebanner" />

      <div className="home__row">
        <Products
          id="001"
          title="boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback, IPX7 Water Resistance, Super Touch Controls,(Raging Red)"
          price="1,999.00"
          rating={5}
          image="prod1.jpg"
        />
        <Products
          id="002"
          title="boAt Stone 180 5 Watt Truly Wireless Bluetooth Speaker (Blue)"
          price="899.00"
          rating={5}
          image="prod3.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="003"
          title="boAt 102 Wireless Lightweight Neckband with BT v5.0, Immersive Audio, Up to 15H Playback, IPX4 Water Resistance, Dual Pairing, Magnetic Earbuds(Blue)"
          price="899.00"
          rating={5}
          image="prod4.jpg"
        />
        <Products
          id="004"
          title="boAt Rockerz 255 Sports Wireless Bluetooth in Ear Neckband Earphone with Mic (Orange)"
          price="899.00"
          rating={5}
          image="prod5.jpg"
        />
        <Products
          id="005"
          title="boAt 102 Wireless Lightweight Neckband with BT v5.0, Immersive Audio, Up to 15H Playback, IPX4 Water Resistance, Dual Pairing, Magnetic Earbuds(Red)"
          price="1,999.00"
          rating={5}
          image="prod6.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="006"
          title=" boAt Aavante Bar 1800 120 Watt 2.1 Channel Wireless Bluetooth Soundbar (Premium Black)"
          price="7,999.00 "
          rating={5}
          image="prod2.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
