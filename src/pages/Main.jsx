import { useState } from 'react';
import { CartProvider } from '../context/CartContext';
import Card from '../shared/Card';
import Header from './Header'
import Menu from './Menu'
import Cart from './Cart';

export default function Main() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Card $width="400px" $height="900px">
        <Header showCart={showCart} setShowCart={setShowCart} />
        {showCart ? (
          <Cart setShowCart={setShowCart}/>
        ) : (
          <Menu />
        )}
      </Card>
    </CartProvider>
  )
}