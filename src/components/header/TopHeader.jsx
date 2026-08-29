import "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";

function TopHeader() {

  const {cartItems} = useContext(cartContext)
  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <form action="" className="search-box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Products"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <div className="header-icons">
          <div className="icon">
            <FaHeart />
            <span className="counter">0</span>
          </div>

          <div className="icon">
            <FaShoppingCart />
            <span className="counter">{cartItems.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
