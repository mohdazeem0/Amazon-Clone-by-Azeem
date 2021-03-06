import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "../0_ContextAPI/StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);

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
      <div className="header__serach">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* three anchor links  */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Azeem</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">and Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header__Basket">
            {/* shopping basket icon */}
            <AddShoppingCartIcon />
            {/* number of items added */}
            <span className="header__basketItems">
              <sup>
                <sup>{cart?.length}</sup>
              </sup>
            </span>
          </div>
        </Link>
      </div>

      {/* basket icon with items number  */}
    </nav>
  );
}

export default Header;
