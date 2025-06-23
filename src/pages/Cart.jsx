import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import VStack from '../shared/VStack';

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)
  return (
    <VStack>카트입니다</VStack>
  )
}