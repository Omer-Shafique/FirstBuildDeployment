import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { HomeSectionCarouselData } from './HomeSectionCarouselData';

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = HomeSectionCarouselData.map((product, index) => (
    <HomeSectionCard key={index} product={product} />
  ));

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative px-4 lg:px-8">
      <div className="p-5">
        <AliceCarousel
          key={activeIndex} 
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

        <div className="text-center mt-5">
          {/* Your next component content goes here */}
        </div>

        <div className="absolute top-1/2 left-5">
          {activeIndex !==0 && <button
            onClick={slidePrev}
            className="z-1000"
            variant="contained"
            style={{
              borderRadius: '10%',
              transform: 'translate(-50%, -50%) rotate(0deg)',
              transition: 'background 0.3s ease-out',
              backgroundColor: 'rgb(79 70 229)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgb(59 52 180)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgb(79 70 229)';
            }}
          >
            <ArrowLeftIcon
              style={{
                fontSize: '3rem',
                color: '#ffffff',
                height: '40px',
                width: '20px',
                borderRadius: '5px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(18, 0, 28, 0.14)',
              }}
            />
          </button>}
        </div>

        <div className="absolute top-1/2 right-1">
          {activeIndex !== items.length - 1 && (
            <button
              onClick={slideNext}
              className="z-50"
              variant="contained"
              style={{
                borderRadius: '10%',
                transform: 'translate(-50%, -50%) rotate(0deg)',
                transition: 'background 0.3s ease-out',
                backgroundColor: 'rgb(79 70 229)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgb(59 52 180)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgb(79 70 229)';
              }}
              aria-label="next"
            >
              <ArrowRightIcon
                style={{
                  borderRadius: '15px',
                  fontSize: '3rem',
                  color: '#ffffff',
                  height: '40px',
                  width: '20px',
                  borderRadius: '5px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(18, 0, 28, 0.14)',
                }}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
