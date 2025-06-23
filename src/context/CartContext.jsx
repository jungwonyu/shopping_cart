import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const initialCart = () => {
    setCartItems([]);
  };

  const increaseCount = (id) => {
    const targetItem = cartItems.find((item) => item.id === id);
    cartItems.push(targetItem);
    setCartItems([...cartItems]);
  };

  const decreaseCount = (id) => {
    const targetItemIndex = cartItems.findIndex((item) => item.id === id);
    if (targetItemIndex !== -1) {
      cartItems.splice(targetItemIndex, 1);
      setCartItems([...cartItems]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, initialCart, increaseCount, decreaseCount }}>
      {children}
    </CartContext.Provider>
  );
}