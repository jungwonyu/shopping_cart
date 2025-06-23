import VStack from '../shared/VStack';
import PopularList from './PopularList';
import MenuList from './MenuList';

export default function Menu() {
  return (
    <VStack $padding="10px 20px" $overflowY="auto" $height="780px" $gap="20px">
      <PopularList />
      <MenuList />
    </VStack>
  )
}