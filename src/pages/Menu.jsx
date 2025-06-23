import VStack from '../shared/VStack';
import PopularList from './PopularList';
import MenuList from './MenuList';

export default function Menu() {
  return (
    <VStack $padding="10px 20px" $overflowY="scroll" $height="100%" $gap="30px">
      <PopularList />
      <MenuList />
    </VStack>
  )
}