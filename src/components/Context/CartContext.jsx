import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({children}) {

  const [cartItems, setCartItems] = useState(() =>{
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() =>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  return(
    <CartContext.Provider value={{cartItems, addToCart}}>
        {children}
    </CartContext.Provider>
  ); 
}

export default CartProvider;
