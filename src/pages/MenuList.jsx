import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import Typography from '../shared/Typography';
import VStack from '../shared/VStack';
import ImageDesc from '../components/common/ImageDesc';
import CartButton from '../components/common/AddButton';
import ImgMenu1 from '../assets/images/Grapefruit Honey Black Tea.jpg';
import ImgMenu2 from '../assets/images/Sea Salt Caramel Cold Brew.jpg';
import ImgMenu3 from '../assets/images/Cafe Americano.jpg';
import ImgMenu4 from '../assets/images/Affogato.jpg';

export default function MenuList() {
  const menuItems = [
    { src: ImgMenu1, alt: '허니 자몽 블랙티', name: '허니 자몽 블랙티', desc: '새콤한 자몽과 달콤한 꿀', price: '5,900' },
    { src: ImgMenu2, alt: '씨솔트 카라멜 콜드 브루', name: '씨솔트 카라멜 콜드 브루', desc: '부드러운 크림과 달콤한 카라멜', price: '6,000' },
    { src: ImgMenu3, alt: '카페 아메리카노', name: '카페 아메리카노', desc: '에스프레소와 물의 조화', price: '4,700' },
    { src: ImgMenu4, alt: '클래식 아포가토', name: '클래식 아포가토', desc: '에스프레소와 아이스크림의 조화', price: '5,300' },
    { src: ImgMenu1, alt: '허니 자몽 블랙티', name: '허니 자몽 블랙티', desc: '새콤한 자몽과 달콤한 꿀', price: '5,900' },
    { src: ImgMenu2, alt: '씨솔트 카라멜 콜드 브루', name: '씨솔트 카라멜 콜드 브루', desc: '부드러운 크림과 달콤한 카라멜', price: '6,000' },
    { src: ImgMenu3, alt: '카페 아메리카노', name: '카페 아메리카노', desc: '에스프레소와 물의 조화', price: '4,700' },
    { src: ImgMenu4, alt: '클래식 아포가토', name: '클래식 아포가토', desc: '에스프레소와 아이스크림의 조화', price: '5,300' },
  ];

  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = (item) => {
    addToCart(item);
  }

  return (
    <VStack $height="300px" $gap="10px">
      <Typography kind="title">Menu</Typography>
      <VStack $gap="10px">
        {menuItems.map((item, index) => (
          <ImageDesc key={index} src={item.src} alt={item.alt} name={item.name} desc={item.desc} price={item.price}><CartButton onClick={() => handleAddToCart(item)} /></ImageDesc>
        ))}
      </VStack>
    </VStack>
  )
}