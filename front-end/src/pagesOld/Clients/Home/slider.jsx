import React from 'react';
import Arrows from './arrows';
import SliderContent from './sliderContent';
import Dots from './dots';
// import sliderImage from './imageSlider'
import { useEffect } from 'react';
import { useState } from 'react';
import './slider.css';

export default function Slider({sliderImage}) {

    const len = sliderImage.length - 1;

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex,len]);


    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}
