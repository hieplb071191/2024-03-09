import { SetStateAction, useEffect, useState } from "react";
import cauroselStyles from '../../../styles/caurosel.module.scss'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    UncontrolledCarousel
  } from 'reactstrap';


interface CauroselInfiniteProp {
    items: any[];
}


 function IntiniteCaurosel(
    {
        items
    }: CauroselInfiniteProp) {      
        return (
            <div className={cauroselStyles['caurosel']}>
                <UncontrolledCarousel items={items} autoPlay={false} fade={true}/>;
            </div>
        );
}

export default IntiniteCaurosel

