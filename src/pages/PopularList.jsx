import HStack from '../shared/HStack';
import Typography from '../shared/Typography';
import VStack from '../shared/VStack';
import ImageCard from '../components/common/ImageCard';
import ImgMenu1 from '../assets/images/Grapefruit Honey Black Tea.jpg';
import ImgMenu2 from '../assets/images/Sea Salt Caramel Cold Brew.jpg';
import ImgMenu3 from '../assets/images/Cafe Americano.jpg';
import ImgMenu4 from '../assets/images/Affogato.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PopularList() {
  const bestSeller = [
    { id: 1, src: ImgMenu1, name: '허니 자몽 블랙티', price: 5900 },
    { id: 2, src: ImgMenu2, name: '씨솔트 카라멜 콜드 브루', price: 6000 },
    { id: 3, src: ImgMenu3, name: '카페 아메리카노', price: 4700 },
    { id: 4, src: ImgMenu4, name: '클래식 아포가토', price: 5300 },
  ];

  return (
    <VStack $height="300px" $gap="10px">
      <Typography kind="title">Most Popular</Typography>
      <HStack>
        <Swiper spaceBetween={20} slidesPerView={2}>
          {bestSeller.map((item) => (
            <SwiperSlide key={item.id}>
              <ImageCard src={item.src} alt={item.name} name={item.name} price={item.price.toLocaleString()} />
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
    </VStack>
  )
}