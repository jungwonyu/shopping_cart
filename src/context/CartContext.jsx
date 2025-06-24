import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const initToCart = () => setCartItems([]); // 장바구니 초기화

  const addToCart = (item) => { // cartItems에 아이템을 추가 
    setCartItems((prev) => {
      const found = prev.find((prevItem) => prevItem.id === item.id); // 이미 장바구니에 있는 아이템인지 확인
      if (found) { 
        return prev.map((prevItem) => prevItem.id === item.id ? { ...prevItem, count: prevItem.count + 1 } : prevItem); // 이미 있는 아이템이면 카운트만 증가
      }
      return [...prev, { ...item, count: 1 }]; // 새로운 아이템이면 카운트 1로 추가
    });
  };

  const increaseCount = (id) => { // 아이템의 카운트를 증가
    setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, count: item.count + 1 } : item));
  };

  const decreaseCount = (id) => { // 아이템의 카운트를 감소
    setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, count: item.count - 1 } : item).filter((item) => item.count > 0));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, initToCart, increaseCount, decreaseCount }}>{children}</CartContext.Provider>
  );
}