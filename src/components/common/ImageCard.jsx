import Typography from '../../shared/Typography';
import VStack from '../../shared/VStack';
import Img from '../../shared/Img';

export default function ImageCard({ src, alt, name, price }) {
  return (
    <VStack $width="150px" $gap="10px" $alignItems="center" $padding="10px" $borderRadius="20px" $backgroundColor="var(--color-light-green)">
      <Img src={src} alt={alt} $borderRadius="20px" $width="130px" />
      <VStack $justifyContent="space-around">
        <Typography kind="subTitle">{name}</Typography>
        <Typography kind="price" $fontWeight="bold">{price}원</Typography>
      </VStack>
    </VStack>
  )
}