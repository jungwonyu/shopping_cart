import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ImageCard from '../components/common/ImageCard';
import { popularItems } from '../data/menuData';
import HStack from '../shared/HStack';
import Typography from '../shared/Typography';
import VStack from '../shared/VStack';

export default function PopularList() {
  return (
    <VStack $height="300px" $gap="10px">
      <Typography kind="title">Most Popular</Typography>
      <HStack>
        <Swiper spaceBetween={20} slidesPerView={2}>
          {popularItems.map((item) => (
            <SwiperSlide key={item.id}>
              <ImageCard src={item.src} alt={item.name} name={item.name} price={item.price.toLocaleString()} />
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
    </VStack>
  )
}