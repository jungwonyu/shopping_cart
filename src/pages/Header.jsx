import HStack from '../shared/HStack';
import VStack from '../shared/VStack';
import Typography from '../shared/Typography';
import Img from '../shared/Img';
import LogoImg from '../assets/icon/logo.png';
import CartButton from '../components/common/CartButton';

export default function Header({ setShowCart }) {
  return (
    <HStack $height="110px" $justifyContent="space-around" $padding="10px" $backgroundColor="var(--color-warm-neutral)" style={{ borderBottom: '.1em solid var(--color-gray)' }}>
      <VStack $width="80%">
        <HStack $gap="10px" $alignItems="center" $justifyContent="center" $padding="20px">
        <Img src={LogoImg} alt="logo" $width="50px" $height="50px" $borderRadius="50%" />
        <VStack $justifyContent="center">
          <Typography kind="subTitle">Jay</Typography>
          <Typography kind="desc">Starbucks Delivery Service</Typography>
        </VStack>
      </HStack>
      </VStack>
      <CartButton setShowCart={setShowCart} />
    </HStack>
  )
}