import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Typography from '../../shared/Typography';
import VStack from '../../shared/VStack';
import Img from '../../shared/Img';
import Button from '../../shared/Button';
import CartIcon from '../../assets/icon/ico_cart.png';

export default function CartButton({ setShowCart }) {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.count, 0); // cart에 있는 아이템 수 계산

  return (
    <VStack $width="20%" $alignItems="center" $justifyContent="center" $position="relative">
      <Button onClick={setShowCart}>
        <VStack $width="50px" $height="50px" $backgroundColor="var(--color-gray)" $borderRadius="15px" $padding="10px" $justifyContent="center" $alignItems="center">
          <Img src={CartIcon} alt="logo" $width="30px" $height="30px" />
        </VStack>
        <VStack $width="30px" $height="30px" $justifyContent="center" $alignItems="center" $position="absolute" $top="10px" $right="0px" $backgroundColor="var(--color-goldenrod)" $borderRadius="50%">
          <Typography $color="var(--color-white)" $fontWeight="bold">{cartItemsCount}</Typography>
        </VStack>
      </Button>
    </VStack>
  );
}