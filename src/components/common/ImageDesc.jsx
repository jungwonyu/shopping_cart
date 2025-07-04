import Typography from '../../shared/Typography';
import HStack from '../../shared/HStack';
import VStack from '../../shared/VStack';
import Img from '../../shared/Img';

export default function ImageDesc({ src, alt, name, desc, price, children }) {
  return (
    <HStack $width="100%" $height="100px" $gap="10px" $alignItems="center" $padding="10px" $borderRadius="20px" $backgroundColor="var(--color-warm-neutral)">
      <Img src={src} alt={alt} $borderRadius="20px" $width="70px" />
      <VStack $width="220px" $justifyContent="space-between">
        <Typography kind="subTitle">{name}</Typography>
        <Typography kind="desc">{desc}</Typography>
        <Typography kind="price" $fontWeight="bold">{price}원</Typography>
      </VStack>
      {children}
    </HStack>
  )
}