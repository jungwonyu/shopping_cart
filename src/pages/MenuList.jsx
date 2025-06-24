import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { menuItems } from '../data/menuData';
import Typography from '../shared/Typography';
import VStack from '../shared/VStack';
import ImageDesc from '../components/common/ImageDesc';
import AddButton from '../components/common/AddButton';

export default function MenuList() {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (item) => addToCart(item);

  return (
    <VStack $height="300px" $gap="10px">
      <Typography kind="title">Menu</Typography>
      <VStack $gap="10px">
        {menuItems.map((item) => (
          <ImageDesc key={item.id} src={item.src} alt={item.name} name={item.name} desc={item.desc} price={item.price.toLocaleString()}>
            <AddButton onClick={() => handleAddToCart(item)} />
          </ImageDesc>
        ))}
      </VStack>
    </VStack>
  )
}