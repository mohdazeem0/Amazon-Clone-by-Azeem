import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function componentName() {
  return (
    <nav className="header">
      {/* logo  */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonlogo"
        />{" "}
      </Link>

      {/* search box  */}
      <input type="text" className="header__searchInput" />
      {/* three anchor links  */}
      {/* basket icon with items number  */}
    </nav>
  );
}

export default componentName;
