import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return [];
    case 'ADD': {
      const found = state.find((item) => item.id === action.item.id);
      if (found) {
        return state.map((item) => item.id === action.item.id   ? { ...item, count: item.count + 1 } : item);
      }
      return [...state, { ...action.item, count: 1 }];
    }
    case 'INCREASE':
      return state.map((item) => item.id === action.id ? { ...item, count: item.count + 1 } : item);
    case 'DECREASE':
      return state
        .map((item) =>
          item.id === action.id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  const initToCart = () => dispatch({ type: 'INIT' });
  const addToCart = (item) => dispatch({ type: 'ADD', item });
  const increaseCount = (id) => dispatch({ type: 'INCREASE', id });
  const decreaseCount = (id) => dispatch({ type: 'DECREASE', id });

  return (
    <CartContext.Provider value={{ cartItems, addToCart, initToCart, increaseCount, decreaseCount }}>
      {children}
    </CartContext.Provider>
  );
}