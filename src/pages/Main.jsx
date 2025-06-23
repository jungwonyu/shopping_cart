import { useState } from 'react';
import Card from '../shared/Card';
import Header from './Header'
import Menu from './Menu'
import Cart from './Cart';
import { CartProvider } from '../context/CartContext';

export default function Main() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Card $width="400px" $height="900px">
        <Header showCart={showCart} setShowCart={setShowCart} />
        {showCart ? (
          <Cart setShowCart={setShowCart} />
        ) : (
          <Menu></Menu>
        )}
      </Card>
    </CartProvider>
  )
}