import React from 'react';
import { mainCarouselData } from './MainCarousalData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className='cursor-pointer h-[10%] w-[100%] '
      role='presentation'
      src={item.image}
      alt=''
    ></img>
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
      disableDotsControls
    />
  );
};

export default MainCarousel;
