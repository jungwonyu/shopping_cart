import { useContext, useMemo, useState } from 'react';
import { CartContext } from '../context/CartContext';
import VStack from '../shared/VStack';
import HStack from '../shared/HStack';
import Img from '../shared/Img';
import Line from '../shared/Line';
import Typography from '../shared/Typography';
import Button from '../shared/Button';
import CountButton from '../components/common/CountButton';
import Modal from '../shared/Modal';
export default function Cart({ setShowCart }) {
  let cartContent;
  const { cartItems, initialCart, increaseCount, decreaseCount } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  const uniqueCartItems = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const existingItem = acc.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ ...item, count: 1 });
      }
      return acc;
    }, []);
  }, [cartItems]);

  const totalPrice = useMemo(() => cartItems.reduce((total, item) => total + item.price, 0), [cartItems]).toLocaleString();

  const handleOrder = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setShowCart(false);
      initialCart();
    }, 2000);
  }

  if (cartItems.length > 0) {
    cartContent = 
      <VStack $width="100%" $height="700px" $gap="10px" $padding="10px 20px" $overflowY="scroll">
        {uniqueCartItems.map((item) => (
          <VStack key={item.id} $width="100%" $height="max-content" $gap="10px">
            <HStack $width="100%" $height="90px" $gap="10px" $alignItems="center" $padding="10px" $borderRadius="20px" $backgroundColor="var(--color-warm-neutral)">
              <Img src={item.src} alt={item.alt} $borderRadius="20px" $width="70px" />
              <VStack $width="220px" $justifyContent="center">
                <Typography kind="subTitle">{item.name}</Typography>
                <HStack $height="max-content" $gap="10px">
                  <Typography $color="var(--color-goldenrod)" $fontWeight="bold">{item.price.toLocaleString()}원</Typography>
                  <Typography $color="var(--color-dark-gray)" $fontWeight="bold" $marginLeft="10px">x{item.count}</Typography>
                </HStack>
              </VStack>
              <VStack $width="50px" $justifyContent="center" $alignItems="flex-end" $gap="4px">
                <CountButton kind="minus" onClick={() => decreaseCount(item.id)} />
                <CountButton kind="plus" onClick={() => increaseCount(item.id)} />
              </VStack>
            </HStack>
            <Line />
          </VStack>
        ))}
        <HStack $width="100%" $height="max-content" $justifyContent="space-between" $padding="10px">
          <Typography kind="subTitle">총 금액</Typography>
          <Typography $color="var(--color-goldenrod)" $fontWeight="bold">{totalPrice}원</Typography>
        </HStack>
        <Button $background="var(--color-accent-green)" $color="var(--color-white)" $hover onClick={handleOrder}>주문하기</Button>
      </VStack>;
  } else {
    cartContent = (
      <VStack $justifyContent="flex-start" $alignItems="center" $height="100%">
        <Typography kind="desc">장바구니가 비어있습니다.</Typography>
      </VStack>
    );
  }

  return (
    <>
    <VStack $height="100%">
      <HStack $height="80px" $justifyContent="space-around" $alignItems="center">
        <Button $color="var(--color-accent-green)" onClick={() =>setShowCart(false)}>◀</Button>
        <Typography kind="title">My CartList</Typography>
      </HStack>
      {cartContent}
    </VStack>

    {showAlert && (
      <Modal><Typography kind="desc" $textAlign="center">주문이 완료되었습니다!<br />총 금액은 {totalPrice}원입니다.</Typography></Modal>
    )}
  </>
  )
}