import React, { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { IoTrashOutline } from "react-icons/io5";

import "./Cart.css";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  console.log(cartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <div className="order_summary">
        <h1>Order Summary</h1>

        <div className="items">
          {cartItems.length === 0 ? (
            <p>Your Cart is Empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="item_cart">
                <div className="img_name">
                  <div className="img_item">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className="price_item">$ {item.price}</p>
                    <div className="quantity_control">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                </div>
                <button className="delete_item">
                  <IoTrashOutline onClick={() => removeFromCart(item.id)}/>
                </button>
              </div>
            ))
          )}
        </div>
        <div className="bottom_summary">
          <div className="shop_table">
            <p>Total:</p>
            <span className="total_checkout">${total.toFixed(2)}</span>
          </div>
          <div className="button_div">
            <button type="submit">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
