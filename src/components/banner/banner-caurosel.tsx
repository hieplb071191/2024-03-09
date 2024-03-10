import { SetStateAction, useEffect, useState } from "react";
import cauroselStyles from '../../../styles/caurosel.module.scss'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';


interface CauroselInfiniteProp {
    items: any[];
}


 function IntiniteCaurosel(
    {
        items
    }: CauroselInfiniteProp) {
        
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        };
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        };
      
        const goToIndex = (newIndex: SetStateAction<number>) => {
          if (animating) return;
          setActiveIndex(newIndex);
        };
      
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.key}
            >
              <img src={item.src} alt={item.altText} />
            </CarouselItem>
          );
        });
      
        return (
            <div className={cauroselStyles['caurosel']}>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    autoPlay={false}
                    
                >
                    <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                    direction="prev"
                    directionText=""
                    onClickHandler={previous}
                    />
                    <CarouselControl
                    direction="next"
                    directionText=""
                    onClickHandler={next}
                    />
                </Carousel>
            </div>
        );
}

export default IntiniteCaurosel

