import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";

import {
  FaStarHalfAlt,
  FaCartArrowDown,
  FaRegHeart,
  FaShare,
  FaCheck,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";

function Product({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const isInCart = cartItems.some((i) => i.id === item.id);

  const handleAddToCart = () =>{
    addToCart(item)

    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />

        <div className="toast-content">
          <strong>{item.title}</strong>
          added to cart
          <div>
            <Link to="/cart">
              <button className="btn">View Cart</button>
            </Link>
          </div>
        </div>
      </div>
      , {duration : 3500}
    )
  }

  return (

    <div className={`product ${isInCart ? "in_cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="cart_status"><FaCheck /> In Cart</span>
        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="add_to_cart_btn" onClick={handleAddToCart}>
          <FaCartArrowDown />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
