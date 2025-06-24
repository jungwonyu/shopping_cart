import { useContext, useMemo, useState } from 'react';
import { CartContext } from '../context/CartContext';
import VStack from '../shared/VStack';
import HStack from '../shared/HStack';
import Img from '../shared/Img';
import Line from '../shared/Line';
import Typography from '../shared/Typography';
import Button from '../shared/Button';
import CountButton from '../components/common/CountButton';
import AlertModal from '../components/common/AlertModal';

export default function Cart({ setShowCart }) {
  const { cartItems, initToCart, increaseCount, decreaseCount } = useContext(CartContext); // CartContext에서 필요한 값들을 가져오기
  const [showAlert, setShowAlert] = useState(false); // 주문 완료 알럿 상태
  const alertTime = 2000;

  const totalPrice = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.count, 0), [cartItems]).toLocaleString(); // 총 금액 계산

  const handleOrder = () => { // 주문 처리 함수
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setShowCart(false);
      initToCart();
    }, alertTime);
  }

  return (
    <>
      <VStack $height="100%">
        <HStack $height="80px" $justifyContent="space-around" $alignItems="center">
          <Button $color="var(--color-accent-green)" onClick={() => setShowCart(false)}>◀</Button>
          <Typography kind="title">My CartList</Typography>
        </HStack>

        {cartItems.length > 0 ? (
          <VStack $width="100%" $height="700px" $gap="10px" $padding="10px 20px" $overflowY="scroll">
            {cartItems.map((item) => (
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
          </VStack>
        ) : (
          <VStack $justifyContent="flex-start" $alignItems="center" $height="100%">
            <Typography kind="desc">장바구니가 비어있습니다.</Typography>
          </VStack>
        )}
      </VStack>

      {showAlert && <AlertModal totalPrice={totalPrice} />}
    </>
  )
}