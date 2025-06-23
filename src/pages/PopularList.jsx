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
    { src: ImgMenu1, alt: '허니 자몽 블랙티', name: '허니 자몽 블랙티', price: '5,900' },
    { src: ImgMenu2, alt: '씨솔트 카라멜 콜드 브루', name: '씨솔트 카라멜 콜드 브루', price: '6,000' },
    { src: ImgMenu3, alt: '카페 아메리카노', name: '카페 아메리카노', price: '4,700' },
    { src: ImgMenu4, alt: '클래식 아포가토', name: '클래식 아포가토', price: '5,300' },
  ];

  return (
    <VStack $height="300px" $gap="10px">
      <Typography kind="title">Most Popular</Typography>
      <HStack>
        <Swiper spaceBetween={20} slidesPerView={2}>
          {bestSeller.map((item, index) => (
            <SwiperSlide key={index}>
              <ImageCard src={item.src} alt={item.alt} name={item.name} price={item.price} />
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
    </VStack>
  )
}