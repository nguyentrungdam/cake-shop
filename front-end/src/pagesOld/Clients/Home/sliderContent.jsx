import React from 'react'

export default function SliderContent({ activeIndex, sliderImage }) {
    return (
        <div className='frame'>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <a className='link_to' href={slide.link}>
                        <img className="slide-image" src={slide.urls} alt="" />
                    </a>
                </div>
            ))}
        </div>
    )
}
