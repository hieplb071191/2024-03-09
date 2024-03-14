'use-client'
import styles from '../../styles/custom-carousel.module.scss'
import { useState } from "react";

interface imageCarouselProps {
    url: string;
    description: string;
}

interface CustomCarousel {
    listImage: imageCarouselProps[]
}

export default function CustomCarousel(props: CustomCarousel) {
    const { listImage } = props
    const [activateImage, setActivateImage] = useState<number>(0)
    const nextImage = () => {
        setActivateImage(prev => {
            if (prev === (listImage.length -1)) {
                return 0
            } else {
                return prev + 1
            }

        })
    }
    const prevImage =  () => {
        setActivateImage(prev => {
            if (prev === (0)) {
                return listImage.length -1
            } else {
                return prev - 1
            }

        })
    }
    return (
        <div className={styles['custom-carousel']}>
            {
                listImage.map((item, index) => {
                    return (
                        <div className={styles['img-content']} key={index}>
                            <img src={item.url} alt="item" />
                        </div>
                    )
                })
            }
        </div>
    )
} 