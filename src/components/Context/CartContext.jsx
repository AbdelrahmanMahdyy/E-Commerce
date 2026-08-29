import React, { Children, createContext, useEffect, useState } from "react";

export const cartContext = createContext();

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
    <cartContext.Provider value={{cartItems, addToCart}}>
        {children}
    </cartContext.Provider>
  ); 
}

export default CartProvider;
