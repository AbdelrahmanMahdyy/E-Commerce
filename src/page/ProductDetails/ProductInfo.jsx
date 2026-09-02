import React, { useContext } from "react";
import {
  FaStarHalfAlt,
  FaCartArrowDown,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../../components/Context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const isInCart = cartItems.some((i) => i.id === product.id);
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />

        <div className="toast-content">
          <strong>{product.title}</strong>
          added to cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };

  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className="price">$ {product.price}</p>

      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="description">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {product.stock} Products left in stock</span>
      </h5>
      <button
        className={`btn ${isInCart ? "in_cart" : ""}`}
        onClick={handleAddToCart}
      >
        {isInCart ? "Item In Cart" : "Add to Cart"} <FaCartArrowDown />
      </button>
      <div className="icons">
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

export default ProductInfo;
