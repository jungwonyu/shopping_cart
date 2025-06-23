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
      <Card $width="100vw" $maxWidth="400px" $height="100vh" $maxHeight="900px" $margin="0 auto" $padding="0">
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